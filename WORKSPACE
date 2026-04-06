workspace(name = "bazel_cicd_demo")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Node.js rules
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "5aae76dbed58b7e4c0b5f85e61b4a7e3b73b44a7c5f8f3d8a6b10c2bc7a0a1d",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.4/rules_nodejs-5.8.4.tar.gz"],
)

# Docker rules
http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "b1e80761a8a8243d03ebca8845e9cc1ba6c82ce7c5179ce2b295cd36f7e394bf",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v0.25.0/rules_docker-v0.25.0.tar.gz"],
)

load("@io_bazel_rules_docker//repositories:repositories.bzl", container_repositories = "repositories")
container_repositories()

load("@io_bazel_rules_docker//nodejs:image.bzl", _nodejs_image_repos = "repositories")
_nodejs_image_repos()
