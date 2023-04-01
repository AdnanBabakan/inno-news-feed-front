export function humanReadableMessage(message: string): string {
  const messages = {
    USER_CREATED_SUCCESSFULLY: 'You\'ve signed up successfully. Please check your email for a verification link.',
    INVALID_CREDENTIALS: 'Invalid credentials. Please try again.',
    EMAIL_NOT_VERIFIED: 'Your email is not verified. Please check your email for a verification link.',
    USER_AUTHENTICATED_SUCCESSFULLY: 'You\'ve logged in successfully.'
  }

  return Object.keys(messages).includes(message) ? messages[message] : message
}