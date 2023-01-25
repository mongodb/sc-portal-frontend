# Contributing

## App Structure

The application is divided up into 2 separate modules
  * Champion
  * Workload
  * Account

Additionally many of the shared components (Navbar, Footer) are left in the root of the App module. 

## Architecture

Application follows the standard architecture for Angular CLI projects.  Key folder and files to be aware of are

 - ``` src\app ``` Stores all the source code for the app itself
 - ``` src\assets ``` Location for images and other style elements for the applicaiton
 - ``` src\environments``` Location for env config files that apply to the application. See here for more details




### Module Structure

Each module is contained in it's own folder. The module will contain the following 

 - Separte folders for each relevant component
 - Folder for model interfaces that are owned by the module
 - {module-name}-service.ts class for owning the external calls the module makes. These are were HTTP/REST API calls are made
 - {module-name}-routing.ts class to define the routing specific actions for the module

### Component Architecture

Currently each component essentially represents a page in the UI that can be interacted with. The exception is the Navbar and Footer components in the App module. 

This is not a standard that has to continue and we may see times when making more granular components makes sense (i.e. a shareable table of champions or workloads) but it hasn't presented itself yet. 



## Environments

Current the app has 2 environments defined
 - Production
 - Other

When doing local testing, you should replace the value of the ``` app_url ``` attribute in the ``` environment.ts ``` file in the ``` src\environments ``` folder with the URL that is appropriate for your specific backend. 
The intent of the ``` app_url ``` element is to point to the base URL for the backend, not to point to any specific version or endpoint. Those should be done in the individual service calls in the appropriate ``` ***-service.ts ``` classes



