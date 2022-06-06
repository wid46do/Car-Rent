import http from "../http-common";

class FileUploadService {
    upload(formData, onUploadProgress) {
        return http.post("", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return http.get("");
    }
}

export default new FileUploadService();