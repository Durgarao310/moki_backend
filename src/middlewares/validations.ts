import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const registerValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body) {
    return res.status(400).send({
      status: 'fail',
      message: 'please check your request!',
      content: null
    })
  }

  const schema = Joi.object({
    phone: Joi.string().min(10).required(),
    uid: Joi.string().min(6).required()
  })

  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).send({
      status: 'fail',
      message: error.details[0].message,
      content: null
    })
  }
  next()
}

module.exports.registerValidation = registerValidation
