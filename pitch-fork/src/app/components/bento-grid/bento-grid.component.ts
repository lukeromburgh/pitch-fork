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
      title: 'Get Feedback',
      description:
        'Post your big ideas and receive feedback from a growing community.',
      icon: 'box',
      content: 'terminal',
      terminalCode: [
        { lineNumber: 1, content: `I'd love to invest!` },
        {
          lineNumber: 2,
          content: '  Me too!!! Any idea when we can?',
          indentation: 1,
        },
        { lineNumber: 3, content: '    This will be big', indentation: 2 },
        {
          lineNumber: 4,
          content: '      - load more comments',
          indentation: 3,
        },
      ],
    },
    {
      title: 'Find Partners',
      description:
        'Good ideas bring great people together, you could find your co-founder lurking in your comments.',
      icon: 'package',
      content: 'terminal-prompt',
      prompt: '~/Add luke_dwsn to your team? (y/N) ',
    },
    {
      title: 'Pre-build Validation',
      description: 'Testing and market fit are what we do best.',
      icon: 'code',
      content: 'checks',
      checks: [
        {
          status: 'success',
          message: 'Validate your concept before launching',
          detail: '4 successful checks',
          approvals: 2,
        },
        {
          status: 'success',
          message: 'Engage with fellow entrepreneurs and innovators',
          detail: '26 comments',
          items: [
            {
              icon: 'terminal-square',
              color: '#f2a10c',
              label: 'Queries',
              detail: '2 Queries',
            },
            {
              icon: 'clock',
              color: '#f2a10c',
              label: 'Likes in last hour',
              detail: '100+',
            },
            {
              icon: 'code',
              color: '#f2a10c',
              label: 'Collaboration requests',
              detail: '4',
            },
          ],
        },
        {
          status: 'success',
          message: 'Discover trending startup ideas',
          detail: 'Get ahead of the curve, and then stay there',
        },
      ],
      tall: true,
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
