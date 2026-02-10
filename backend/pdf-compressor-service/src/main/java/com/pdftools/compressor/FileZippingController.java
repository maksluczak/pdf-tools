package com.pdftools.compressor;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/pdf")
@RequiredArgsConstructor
public class FileZippingController {

    public final FileZippingService fileZippingService;

    @PostMapping("/compress-to-zip")
    public ResponseEntity<byte[]> compressToZip(@RequestParam("file") MultipartFile file) throws IOException {
        FileToZip fileToZip = FileToZip.builder()
                .fileName(file.getOriginalFilename())
                .content(file.getBytes())
                .build();

        byte[] zippedFile = fileZippingService.zipFile(fileToZip);

        String downloadName = fileToZip.getFileName().replace(".pdf", ".zip");

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + downloadName + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(zippedFile);
    }
}
