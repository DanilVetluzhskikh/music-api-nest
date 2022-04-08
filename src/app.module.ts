import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { FileModule } from './file/file.module'
import { TrackModule } from './track/track.module'
import * as path from 'path'
import { MONGODB_URL } from '../security'

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(MONGODB_URL),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    FileModule
  ]
})
export class AppModule {}