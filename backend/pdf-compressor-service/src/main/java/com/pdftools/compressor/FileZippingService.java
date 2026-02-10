package com.pdftools.compressor;

import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
@NoArgsConstructor
public class FileZippingService {

    static Logger logger = (Logger) LoggerFactory.getLogger(FileZippingService.class);

    public byte[] zipFile(FileToZip fileToZip) {
        logger.info("Zipping file: {}", fileToZip.getFileName());

        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            ZipOutputStream zipOutputStream = new ZipOutputStream(byteArrayOutputStream);

            ZipEntry zipEntry = new ZipEntry(fileToZip.getFileName());
            zipOutputStream.putNextEntry(zipEntry);
            zipOutputStream.write(fileToZip.getContent());
            zipOutputStream.closeEntry();

            zipOutputStream.finish();
            logger.info("{} zipped successfully", fileToZip.getFileName());

            return byteArrayOutputStream.toByteArray();
        } catch (IOException e) {
            logger.error("Error while zipping the file", e);
            throw new RuntimeException("Compression failed", e);
        }
    }
}