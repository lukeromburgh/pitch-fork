import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { ProfileService } from "../../services/profile.service";
import { Router, RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profilePictureFile: File | null = null;
  bannerFile: File | null = null;
  profilePicturePreview: string | ArrayBuffer | null = null;
  bannerPreview: string | ArrayBuffer | null = null;
  selectedColor: string = "#2C3539";
  errorMessage: string | null = null; // For UI feedback

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private http: HttpClient // Optional, can remove if only using ProfileService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [{ value: "", disabled: true }],
      email: [{ value: "", disabled: true }],
      bio: ["", [Validators.maxLength(200)]],
      oldPassword: [""],
      password: ["", [Validators.minLength(6)]],
      bannerType: ["image", Validators.required],
      bannerColor: ["#2C3539"],
    });

    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profileForm.patchValue({
          username: data.username,
          email: data.email,
          bio: data.bio || "",
          bannerType: data.banner_type || "image",
          bannerColor: data.banner_color || "#2C3539",
        });
        this.selectedColor = data.banner_color || "#2C3539";
        this.profilePicturePreview = data.profile_picture || null;
        this.bannerPreview = data.banner || null;
      },
      error: (error) => {
        console.error("Error fetching profile data:", error);
        this.errorMessage = "Failed to load profile data";
      },
    });
  }

  onFileSelected(event: Event, type: "profilePicture" | "banner"): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (type === "profilePicture") {
        this.profilePictureFile = file;
        this.previewFile(file, "profilePicture");
      } else {
        this.bannerFile = file;
        this.previewFile(file, "banner");
      }
    }
  }

  previewFile(file: File, type: "profilePicture" | "banner"): void {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === "profilePicture") {
        this.profilePicturePreview = reader.result;
      } else {
        this.bannerPreview = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  onColorChange(event: any): void {
    this.selectedColor = event.target.value;
    this.profileForm.patchValue({ bannerColor: this.selectedColor });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.errorMessage = null; // Reset error message
      const formData = new FormData();
      formData.append("bio", this.profileForm.get("bio")?.value || "");

      const oldPassword = this.profileForm.get("oldPassword")?.value;
      const newPassword = this.profileForm.get("password")?.value;
      if (newPassword && oldPassword) {
        formData.append("old_password", oldPassword);
        formData.append("new_password", newPassword);
      } else if (newPassword && !oldPassword) {
        this.errorMessage =
          "Old password is required when setting a new password";
        return;
      }

      const bannerType = this.profileForm.get("bannerType")?.value;
      formData.append("banner_type", bannerType);

      if (bannerType === "color") {
        formData.append(
          "banner_color",
          this.profileForm.get("bannerColor")?.value || "#2C3539"
        );
      }

      if (this.profilePictureFile) {
        formData.append(
          "profile_picture",
          this.profilePictureFile,
          this.profilePictureFile.name
        );
      }

      if (bannerType === "image" && this.bannerFile) {
        formData.append("banner", this.bannerFile, this.bannerFile.name);
      }

      this.profileService.updateProfile(formData).subscribe({
        next: (response) => {
          console.log("Profile updated successfully:", response);
          this.router.navigate(["/profile"]);
        },
        error: (error) => {
          console.error("Error updating profile:", error);
          if (error.status === 400) {
            this.errorMessage =
              error.error.error || "Bad request. Check your input.";
          } else if (error.status === 401) {
            this.errorMessage = "Unauthorized. Please log in again.";
          } else if (error.status === 404) {
            this.errorMessage = "User not found.";
          } else {
            this.errorMessage = "An unexpected error occurred.";
          }
        },
      });
    }
  }
}
