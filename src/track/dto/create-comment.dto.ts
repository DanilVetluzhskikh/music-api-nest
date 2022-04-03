import * as mongoose from 'mongoose'

export class CreateCommentDto {
  readonly name: string
  readonly text: string
  readonly trackId: mongoose.Schema.Types.ObjectId
}