# API endpoints

This `/api` folder contains the HTTP API endpoints. This isolates the Infrastructure layer from the Business logic (Domain and Application layers).

This means that it can be interchanged with other server, which has only to invoke the Use Cases from the Application layer.

## Endpoints
### `PUT /cars`

Content-Type: application/json

**Body**
```
[
	{
		"id": 1,
		"seats": 4
	},
	{
		"id": 2,
		"seats": 1
	}
]
```

**Response**

Inserted cars

## `POST /journeys`

Creates a new journey and assignes the best candidate car to it (one that has enought empty seats)

Content-Type: application/json

**Body**
```
{
	"id": 22,
	"people": 2
}
```

**Response**

Inserted journey (includdes `car` property if a car was assigned)