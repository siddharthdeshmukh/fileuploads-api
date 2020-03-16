import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, Res } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from './utils';

@Controller("attachments")
export class AttachmentController {

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files',
            filename: editFileName
        })
    }))
    async uploadFile(@UploadedFile() file): Promise<any>{
        console.log('File is ', file)
        return { statusCode: 201, data:file.filename}
    }

    @Get(":filename")
    async downloadFile(@Param('filename') filename: String, @Res() res): Promise<any> {
        res.sendFile(filename, { root: './files'});
    }
}