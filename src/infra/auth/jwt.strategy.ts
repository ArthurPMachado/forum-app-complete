import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import {
  UserPayloadSchema,
  userPayloadSchema,
} from '../http/schemas/token-schema'
import { EnvService } from '../env/env.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(env: EnvService) {
    const publicKey = env.get('JWT_PUBLIC_KEY')

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['RS256'],
    })
  }

  async validate(payload: UserPayloadSchema) {
    return userPayloadSchema.parse(payload)
  }
}
