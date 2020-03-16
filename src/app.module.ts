import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { AttachmentModule } from './attachments/attachment.module';

@Module({
  imports: [
    MulterModule.register({}),
    AttachmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
