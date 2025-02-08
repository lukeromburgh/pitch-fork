import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Ensure you have routing set up

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // ✅ This replaces HttpClientModule
    provideRouter(routes), // ✅ This replaces AppRoutingModule
  ],
}).catch((err) => console.error(err));
