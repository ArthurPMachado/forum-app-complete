import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Env } from '../env'
import {
  UserPayloadSchema,
  userPayloadSchema,
} from '../http/schemas/token-schema'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<Env, true>) {
    const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

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
