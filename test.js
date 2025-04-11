const authHeader = request.headers.get('Authorization');
const regex = /^Bearer\s+(.+)$/;
const authToken = authHeader?.match(regex)?.[1];
console.log(authToken);