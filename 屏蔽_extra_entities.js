console.log('解析开始')
if ($response.body) {
        console.log($response.body)
        try {
            let jsonBody = JSON.parse($response.body);
            console.log(jsonBody)
            console.log(jsonBody.data)

            // 检查是否存在 "data" 和 "extra_entities" 字段
            if (jsonBody && jsonBody.data && jsonBody.data.extra_entities) {
                // 将 extra_entities 字段设置为空数组
                jsonBody.data.extra_entities = [];
                
                // 更新响应体
                $done({ body: JSON.stringify(jsonBody) });
                console.log($response.body)
            } else {
                console.log("Invalid JSON structure or missing fields in the response body");
                $done({});
            }
        } catch (error) {
            console.log("Error parsing JSON:", error);
            $done({});
        }
    } else {
        console.log("Response body is empty");
        $done({});
    }
