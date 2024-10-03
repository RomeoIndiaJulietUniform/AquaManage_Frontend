# 🌊 Aquarium Automation App Frontend

Welcome to the **Aquarium Automation App Frontend** repository! This app allows users to monitor and control various sensors in their marine tank and planted tank, such as temperature, pH levels, nitrate, and more. It connects to a backend that provides data from mock sensors using Swagger-defined APIs.

## 🖥️ Built With

- **React** – Frontend framework for building interactive UIs
- **Swagger** – API documentation and interaction tool for RESTful services
- **Bootstrap** – Frontend toolkit for styling and responsive design
- **Custom Palette** – Tailor-made color schemes for an aesthetically pleasing UI

## 🚀 Features

- **Dashboard with real-time sensor data**: View and control various marine tank sensors such as temperature, pH, salinity, and more.
- **Interactive controls**: Use dials and sliders to control the environment in your aquarium.
- **Responsive design**: Built with Bootstrap and custom palettes for a sleek, responsive, and modern look across all devices.
- **Swagger Integration**: All API interactions are documented and tested with Swagger, allowing seamless integration and API exploration.


## 📋 API Integration

All backend interactions are done via the Swagger-defined API. To explore and understand the endpoints, refer to the `swagger.yml` file or visit the Swagger UI endpoint from the backend service.

## Base URLs:
- **User API**: `http://localhost:8081`
- **Tank API (Marine and Planted)**: `http://localhost:8084`

---

## 🧑‍💻 User API Endpoints (`localhost:8081`)

- **POST** `/users/register`  
  **Description**: Registers a new user.

  **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  **Response**:
  - **201**: `User created successfully`
  - **400**: `Bad request`

- **POST** `/users/login`  
  **Description**: Logs in a user and returns a JWT token.

  **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  **Response**:
  - **200**: `Login successful`, JWT token returned
  - **401**: `Unauthorized`

- **GET** `/users/profile`  
  **Description**: Returns the logged-in user's profile data.

  **Headers**:
  - `Authorization: Bearer <token>`

  **Response**:
  - **200**: `Profile data`
  - **401**: `Unauthorized`

- **PUT** `/users/profile`  
  **Description**: Updates the logged-in user's profile data.

  **Headers**:
  - `Authorization: Bearer <token>`

  **Request Body**:
  ```json
  {
    "email": "string",
    "phone": "string"
  }
  ```

  **Response**:
  - **200**: `Profile updated successfully`
  - **400**: `Bad request`
  - **401**: `Unauthorized`

---

## 🐠 Marine Tank API Endpoints (`localhost:8084`)

- **GET** `/actuators/Marine/greet`  
  **Description**: Returns a greeting message to confirm the service is working.

  **Response**:
  - **200**: `"Hello from Actuator"`

- **POST** `/actuators/Marine/set-saltwater-ratio`  
  **Description**: Sets the saltwater mixing ratio for the marine tank.

  **Parameters**:
  - `ratio` (required, `double`) – Saltwater mixer ratio.

  **Response**:
  - **200**: `Saltwater mixer ratio set to X`

- **POST** `/actuators/Marine/set-calcium-rate`  
  **Description**: Sets the calcium dosing rate for the marine tank.

  **Parameters**:
  - `rate` (required, `double`) – Calcium dosing rate in mL/hour.

  **Response**:
  - **200**: `Calcium dosing rate set to X mL/hour`

- **POST** `/actuators/Marine/set-alkalinity-rate`  
  **Description**: Sets the alkalinity dosing rate for the marine tank.

  **Parameters**:
  - `rate` (required, `double`) – Alkalinity dosing rate in mL/hour.

  **Response**:
  - **200**: `Alkalinity dosing rate set to X mL/hour`

- **POST** `/actuators/Marine/set-skimmer-efficiency`  
  **Description**: Sets the skimmer efficiency percentage for the marine tank.

  **Parameters**:
  - `efficiency` (required, `double`) – Skimmer efficiency in percentage.

  **Response**:
  - **200**: `Skimmer efficiency set to X%`

- **POST** `/actuators/Marine/set-heater-temp`  
  **Description**: Sets the heater temperature for the marine tank.

  **Parameters**:
  - `temperature` (required, `double`) – Heater temperature in Celsius.

  **Response**:
  - **200**: `Heater temperature set to X°C`

- **POST** `/actuators/Marine/set-light-duration`  
  **Description**: Sets the light time duration for the marine tank.

  **Parameters**:
  - `duration` (required, `int`) – Duration in hours.

  **Response**:
  - **200**: `Light duration set to X hours`

- **GET** `/sensors/marine`  
  **Description**: Retrieves all sensor data for the marine tank.

  **Response**:
  - **200**: `Array of sensor data`

---

## 🌱 Planted Tank API Endpoints (`localhost:8084`)

- **GET** `/actuators/Planted/greet`  
  **Description**: Returns a greeting message to confirm the service is working.

  **Response**:
  - **200**: `"Hello from Actuator"`

- **POST** `/actuators/Planted/set-light-intensity`  
  **Description**: Sets the light intensity for the planted tank.

  **Parameters**:
  - `intensity` (required, `double`) – Light intensity in percentage.

  **Response**:
  - **200**: `Light intensity set to X%`

- **POST** `/actuators/Planted/set-fertilizer-dose`  
  **Description**: Sets the fertilizer dosing rate for the planted tank.

  **Parameters**:
  - `dose` (required, `double`) – Fertilizer dosing rate in mL/day.

  **Response**:
  - **200**: `Fertilizer dosing rate set to X mL/day`

- **POST** `/actuators/Planted/set-co2-injection-rate`  
  **Description**: Sets the CO2 injection rate for the planted tank.

  **Parameters**:
  - `rate` (required, `double`) – CO2 injection rate in bubbles per second.

  **Response**:
  - **200**: `CO2 injection rate set to X bubbles/second`

- **GET** `/sensors/planted`  
  **Description**: Retrieves all sensor data for the planted tank.

  **Response**:
  - **200**: `Array of sensor data`

## 🎨 Custom Palette

The app uses a custom color scheme to give a unique, polished look. You can find and customize it in `src/utils/palette.js`. We aim for soft, oceanic hues that enhance the user experience while monitoring the aquarium's environment.

```js
export const palette = {
  primary: '#0D6EFD',   // Bootstrap primary blue
  accent: '#56CCF2',     // Light ocean blue
  dark: '#0B3D91',       // Deep sea blue
  background: '#F3F9FB', // Light seafoam
};
```
Complete Color Palette defined in the index.css

# Running the App
The app will be running at [http://localhost:5173](http://localhost:3000) by default.

## 🛠️ How to Contribute
We welcome contributions from the community! Follow these steps to contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes.
4. Run tests (if any) to ensure your code works as expected.
5. Commit and push your changes to your branch:

    ```bash
    git add .
    git commit -m "Add your commit message"
    git push origin feature/your-feature-name
    ```

6. Submit a pull request (PR):
   - Go to the repository on GitHub.
   - Click on "New Pull Request."
   - Select your branch and submit the PR for review.

7. Wait for your code to be reviewed and merged!

## 👨‍💻 Contributors
Riju Mondal – Project Maintainer  
Contributors – Special thanks to all contributors

## 📝 License
This project is licensed under the MIT License. See the LICENSE file for more details.
