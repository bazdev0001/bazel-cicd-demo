py_library(
    name = "hello",
    srcs = ["hello.py"],
    imports = ["."],
    visibility = ["//visibility:public"],
)

py_test(
    name = "hello_test",
    srcs = ["hello_test.py"],
    deps = [":hello"],
)
