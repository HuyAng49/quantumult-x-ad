let body = $response.body;

try {
    let jsonBody = JSON.parse(body);

    // 检查是否存在 "data" 和 "extra_entities" 字段
    if (jsonBody && jsonBody.data && jsonBody.data.extra_entities) {
        // 将 extra_entities 字段设置为空数组
        jsonBody.data.extra_entities = [];
        
        // 更新响应体
        body = JSON.stringify(jsonBody);
    }
} catch (error) {
    console.log("Error parsing JSON:", error);
}

$done({ body });
