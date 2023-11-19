let body = $response.body;

// 替换或删除 extra_entities 字段下的内容
body = body.replace(/"extra_entities":\{[^}]*\},/, '');

$done({ body });
