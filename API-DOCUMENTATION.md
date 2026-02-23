# API Documentation with RapiDoc

This project uses **RapiDoc** for modern, interactive API documentation.

## Features

- ✅ Modern dark theme UI
- ✅ Interactive API testing
- ✅ OpenAPI 3.0 specification
- ✅ Bearer token authentication support
- ✅ Zero external dependencies (served via CDN)
- ✅ Clean separation: HTML in dedicated controller

## Access Documentation

### Invoice API

- **Documentation UI**: http://localhost:3000/api
- **OpenAPI JSON**: http://localhost:3000/api-json

### Auth API

- **Documentation UI**: http://localhost:3001/api
- **OpenAPI JSON**: http://localhost:3001/api-json

## Architecture

The documentation is implemented using:

1. **DocsController**: Serves the RapiDoc HTML interface at `/api`
2. **Main.ts middleware**: Serves the OpenAPI JSON spec at `/api-json`
3. **Swagger decorators**: Document DTOs and endpoints via `@nestjs/swagger`

This separation keeps the `main.ts` clean while maintaining flexibility for customization in the controller.

## Running the Services

### Invoice Service

```bash
# Development mode
PORT=3000 ENVIRONMENT=local npm run start:dev invoice

# Production mode
PORT=3000 ENVIRONMENT=production npm run start:prod invoice
```

### Auth Service

```bash
# Development mode
PORT=3001 ENVIRONMENT=local npm run start:dev auth

# Production mode
PORT=3001 ENVIRONMENT=production npm run start:prod auth
```

## RapiDoc Configuration

The documentation is configured with:

- **Theme**: Dark mode
- **Layout**: Row layout (sidebar + content)
- **Authentication**: Bearer token support enabled
- **Persistence**: Authorization tokens persist across refreshes

## Adding Documentation to Your Endpoints

Use Swagger decorators in your controllers:

```typescript
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Resource Name')
@Controller('resource')
export class ResourceController {
  @Post()
  @ApiOperation({
    summary: 'Create a resource',
    description: 'Detailed description of what this endpoint does',
  })
  @ApiResponse({
    status: 201,
    description: 'Resource successfully created',
    type: ResourceResponseDto,
  })
  async create(@Body() data: CreateResourceDto) {
    // ...
  }
}
```

## DTO Documentation

Add `@ApiProperty` decorators to your DTOs:

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @ApiProperty({
    description: 'Resource name',
    example: 'My Resource',
  })
  name: string;
}
```

## Benefits of RapiDoc

- **Fast**: Lightweight and performant
- **Modern**: Clean, professional UI
- **Free**: Open-source, no licensing costs
- **Interactive**: Test endpoints directly from the docs
- **Standards-compliant**: Full OpenAPI 3.0 support
