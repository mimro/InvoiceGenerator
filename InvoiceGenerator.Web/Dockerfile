# escape=`
FROM mcr.microsoft.com/powershell:nanoserver-1903 AS downloadnodejs
SHELL ["pwsh", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]
RUN Invoke-WebRequest -OutFile nodejs.zip -UseBasicParsing "https://nodejs.org/dist/v10.16.3/node-v10.16.3-win-x64.zip"; `
Expand-Archive nodejs.zip -DestinationPath C:\; `
Rename-Item "C:\node-v10.16.3-win-x64" c:\nodejs

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-nanoserver-1903 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=downloadnodejs C:\nodejs\ C:\Windows\system32\

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-nanoserver-1903 AS build
COPY --from=downloadnodejs C:\nodejs\ C:\Windows\system32\
WORKDIR /src
COPY ["InvoiceGenerator.Web/InvoiceGenerator.Web.csproj", "InvoiceGenerator.Web/"]
RUN dotnet restore "InvoiceGenerator.Web/InvoiceGenerator.Web.csproj"
COPY . .
WORKDIR "/src/InvoiceGenerator.Web"
RUN dotnet build "InvoiceGenerator.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "InvoiceGenerator.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "InvoiceGenerator.Web.dll"]