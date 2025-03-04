import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-bento-grid',
  templateUrl: './bento-grid.component.html',
  styleUrls: ['./bento-grid.component.scss'],
})
export class BentoGridComponent {
  // Data for the bento grid cards
  cards = [
    {
      title: 'Actions',
      description: 'Set up CI/CD and script your entire workflow.',
      icon: 'box',
      content: 'terminal',
      terminalCode: [
        { lineNumber: 1, content: 'on:' },
        { lineNumber: 2, content: '  push:', indentation: 1 },
        { lineNumber: 3, content: '    branches:', indentation: 2 },
        { lineNumber: 4, content: '      - master', indentation: 3 },
      ],
    },
    {
      title: 'Packages',
      description: 'Publish and consume packages. And containers, too.',
      icon: 'package',
      content: 'terminal-prompt',
      prompt: '~/my_project npm install',
    },
    {
      title: 'Code Review',
      description: 'Testing built into every pull request.',
      icon: 'code',
      content: 'checks',
      checks: [
        {
          status: 'success',
          message: 'All checks have passed',
          detail: '4 successful checks',
          approvals: 2,
        },
        {
          status: 'success',
          message: 'All checks have passed',
          detail: '26 successful checks',
          items: [
            {
              icon: 'terminal-square',
              color: '#f2a10c',
              label: 'Build',
              detail: 'Successful in 2m',
            },
            {
              icon: 'clock',
              color: '#f2a10c',
              label: 'Test',
              detail: 'Successful in 5m',
            },
            {
              icon: 'code',
              color: '#f2a10c',
              label: 'Code scanning / CodeQL',
              detail: 'Successful in 3m',
            },
          ],
        },
        {
          status: 'success',
          message: 'This branch has no conflicts with the base branch',
          detail: 'Merging can be performed automatically.',
        },
      ],
    },
    {
      title: 'Advanced Security',
      description: 'Application security where found means fixed',
      icon: 'shield',
      content: 'security',
      securityItems: [
        {
          type: 'code',
          label: 'Stripe API Key',
          detail: 'env 1.7 found in commit f08a733',
          code: [
            { lineNumber: 1, prefix: '+', content: 'class CloudClient' },
            {
              lineNumber: 2,
              prefix: '+',
              content: '  TOKEN = "sk13g93jg227d1f2f9d98e7f7c921f2"',
            },
            { lineNumber: 3, prefix: '+', content: '' },
          ],
        },
        {
          type: 'alert',
          icon: 'alert-triangle',
          title: 'OAuth token found',
          message:
            "We've noticed a valid OAuth token was committed in your repository. We've revoked the OAuth token.",
        },
        {
          type: 'simple',
          label: 'Google API Key',
          detail: 'env 1.9 found in commit f08a733',
        },
      ],
      wide: true,
    },
  ];
}
