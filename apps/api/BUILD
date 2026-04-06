load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary", "nodejs_test")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")

nodejs_binary(
    name = "api",
    entry_point = "index.js",
    data = [
        "package.json",
        "index.js",
        "@npm//express",
    ],
    visibility = ["//visibility:public"],
)

nodejs_test(
    name = "api_test",
    entry_point = "tests/api.test.js",
    data = [
        "index.js",
        "tests/api.test.js",
        "@npm//jest",
        "@npm//supertest",
        "@npm//express",
    ],
)

nodejs_image(
    name = "api_image",
    entry_point = "index.js",
    data = [
        "index.js",
        "package.json",
        "@npm//express",
    ],
)
