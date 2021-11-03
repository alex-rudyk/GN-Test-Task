# GNetvork test task

To run this program, call the following command in the terminal:
```npm run start```

## Check the operation of the application:

1) Go to `localhost:8080/{your_number}`
2)  If the number is a multiple of 3, it should return "G"; If the integer is a multiple of 5, it should return "N"; If the integer is a multiple of both 3 and 5, then both "GN" should be displayed. 
otherwise the provided integer should be returned.

## Correct response from app:
```json
{
	"output": "GN"
}
```

## Error rsponse from app:
```json
{
	"message": "Param must be a number"
}
```