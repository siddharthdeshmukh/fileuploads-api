import { Module, HttpModule } from "@nestjs/common";
import { AttachmentController } from "./attachment.controller";

@Module({
    imports: [
        HttpModule
    ],
    controllers: [AttachmentController],
    providers: [ ]
})
export class AttachmentModule {}