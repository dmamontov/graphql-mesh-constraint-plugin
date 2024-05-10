module.exports = class ConstraintDirectiveError extends Error {
  constructor (fieldName, message, context) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)

    this.code = 'VALIDATION_FAILED'
    this.fieldName = fieldName
    this.context = context
  }
}
