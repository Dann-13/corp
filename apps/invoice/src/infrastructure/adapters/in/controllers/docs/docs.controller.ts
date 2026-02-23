import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class DocsController {
  @Get('api')
  serveDocs(@Res() res: Response): void {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Invoice API - Documentation</title>
          <script type="module" src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"></script>
        </head>
        <body>
          <rapi-doc
            spec-url="/api-json"
            theme="dark"
            bg-color="#1a1a1a"
            text-color="#e8e8e8"
            primary-color="#4CAF50"
            nav-bg-color="#252525"
            nav-text-color="#e8e8e8"
            nav-hover-bg-color="#333333"
            render-style="read"
            layout="row"
            show-header="true"
            allow-authentication="true"
            allow-server-selection="false"
            allow-api-list-style-selection="false"
          ></rapi-doc>
        </body>
      </html>
    `);
  }

  @Get('api-json')
  // Este endpoint será reemplazado por el middleware en main.ts
  serveJson(): void {
    // Placeholder - el spec JSON se sirve desde main.ts
  }
}
