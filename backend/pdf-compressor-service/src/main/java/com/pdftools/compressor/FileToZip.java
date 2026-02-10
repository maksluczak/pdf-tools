package com.pdftools.compressor;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class FileToZip {

    private String fileName;
    private byte[] content;
}
