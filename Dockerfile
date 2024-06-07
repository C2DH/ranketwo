# Stage 1: Download and build with Jekyll
FROM jekyll/jekyll:4.2.0 AS jekyll

WORKDIR /app

# Set the version as an argument
ARG COMMIT


# Download tarball using tags
COPY Gemfile ./
COPY Gemfile.lock ./
COPY _config.yml ./
COPY LICENSE ./

COPY _assignments ./_assignments
COPY _data ./_data
COPY _includes ./_includes
COPY _layouts ./_layouts
COPY _sass ./_sass
COPY _units ./_units
COPY _workshops ./_workshops
COPY assets ./assets
COPY d3 ./d3
COPY pages ./pages
COPY scripts ./scripts

RUN chmod -R 777 /app
ENV PAGES_REPO_NWO=C2DH/ranketwo
# Build with Jekyll
RUN jekyll build


# create a file named version.json
# containing all these args
# - GIT_COMMIT
# - GIT_TAG
# - GIT_BRANCH
# - BUILD_DATE
# - GIT_REMOTE
RUN echo "{ \
  \"gitCommitSha\": \"${GIT_COMMIT_SHA}\", \
  \"gitTag\": \"${GIT_TAG}\", \
  \"gitBranch\": \"${GIT_BRANCH}\", \
  \"buildDate\": \"${BUILD_DATE}\", \
  \"gitRemote\": \"${GIT_REMOTE}\" \
}" > version.json

# Stage 2: Bring the result to a Node image
FROM node:22.2.0-alpine3.20

WORKDIR /app
# Copy the result from the previous stage
COPY --from=jekyll /app/_site .
# list files
RUN ls -la
# Install and run pagefind
RUN npx pagefind@v1.1.0 --site . --verbose
