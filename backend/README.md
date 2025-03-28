# DeepSight API

This is the API for the DeepSight technical insight tool. It provides endpoints for accessing conference, organization, and paper data.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the API:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:
- Interactive API docs (Swagger UI): `http://localhost:8000/docs`
- Alternative API docs (ReDoc): `http://localhost:8000/redoc`

### Available Endpoints

#### Conferences
- `GET /api/v1/conferences` - List all conferences
- `GET /api/v1/conferences/{conference_id}` - Get specific conference details

#### Organizations
- `GET /api/v1/organizations` - List all organizations
- `GET /api/v1/organizations/{organization_id}` - Get specific organization details

#### Papers
- `GET /api/v1/papers` - List all papers (with optional filters)
  - Query parameters:
    - `conference`: Filter by conference name
    - `year`: Filter by year
    - `organization`: Filter by organization
    - `keyword`: Filter by keyword
- `GET /api/v1/papers/{paper_id}` - Get specific paper details

#### Analytics
- `GET /api/v1/analytics/conference-stats` - Get conference statistics
- `GET /api/v1/analytics/organization-stats` - Get organization statistics

## Data Models

### Conference
```json
{
  "id": "string",
  "name": "string",
  "year": "integer",
  "description": "string",
  "total_papers": "integer",
  "total_organizations": "integer"
}
```

### Organization
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "total_papers": "integer",
  "conferences": ["string"]
}
```

### Paper
```json
{
  "id": "string",
  "title": "string",
  "authors": ["string"],
  "conference": "string",
  "year": "integer",
  "abstract": "string",
  "keywords": ["string"],
  "citations": "integer",
  "organization": "string"
}
``` 