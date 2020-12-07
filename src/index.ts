import { APIGatewayProxyEvent } from 'aws-lambda';
import solver from './solver';

export const PostHandler = async (event: APIGatewayProxyEvent) => {
  try {
    if (event.body === null) {
      throw new Error('missing payload');
    }
    const payload = JSON.parse(event.body);
    if (payload.input === undefined) {
      throw new Error("invalid payload");
    }

    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify({
        description: "Sample fizzbuzz solver running on AWS Lambda, deployed with CDK",
        result: solver(payload.input),
      }),
    };
  } catch (error) {
    var body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body),
    };
  }
};
export const GetHandler = async (event: APIGatewayProxyEvent) => {
  try {
    if (event.queryStringParameters === null) {
      throw new Error('missing query parameter');
    }
    const payload = event.queryStringParameters;
    if (payload.input === undefined) {
      throw new Error("invalid payload");
    }
    const input = parseInt(payload.input);

    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify({
        description: "Sample fizzbuzz solver running on AWS Lambda, deployed with CDK",
        result: solver(input),
      }),
    };
  } catch (error) {
    var body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body),
    };
  }
};
