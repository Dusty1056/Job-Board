import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";
import uniqid from 'uniqid';

export async function POST(req:NextRequest){
    const data = await req.formData();
    const file = data.get('file') as File;

    const s3Client = new S3Client({
        region: '',
        credentials:{
            accessKeyId:process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
    });

    const newFilename = '${uniqid()}-${file.name}';
    const chunks = [];
    for await (const chunk of FileReader.stream()){
        chunks.push(chunk);
    }
    const bufffer = Buffer.concat(chunks);
    const bucketName = '';
    await s3Client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: newFilename,
        ACL: 'public-read',
        Body: buffer,
        ContentType: file.type
    }));
    return Response.json({
        newFilename,
        url:'https://${bucketName}.s3.amazonaws.com/${newFilename}'
    })

}