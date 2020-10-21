![Test the action](https://github.com/jasondavis303/net-sdk-proj-file-version/workflows/Test%20the%20action/badge.svg)

# net-proj-release-version
GitHub action to get the ReleaseVersion from *.csproj files in newer .Net SDK projects

## Usage
Create new `.github/workflows/do-something.yml` file:

```yml
name: Do stuff
on:
  push:
    branches:
      - master

jobs:
  DoStuff:
    name: Do Stuff
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get version
        id: get_version
        uses: greenygh0st/net-proj-release-version@v1
        with:
          
          # Filepath of the *.csproj file, relative to root of repository
          PROJ_FILE: MyProject/MyProject.csproj

      -name: Next Step
       run: echo "${{ steps.get_version.outputs.RELEASE_VERSION }}"
```

## Inputs

Input | Description
--- | ---
PROJ_FILE | Filepath of the *.csproj file, relative to root of repository

## Outputs

Output | Description
--- | ---
RELEASE_VERSION | ReleaseVersion in *.csproj
