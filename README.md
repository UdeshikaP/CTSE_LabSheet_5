# CTSE_LabSheet_5
 Microservices communicate through an API Gateway
 
SLIIT | DEPARTMENT OF COMPUTER SCIENCE & SOFTWARE ENGINEERING | FACULTY OF COMPUTING 
Module - Current Trends in Software Engineering (SE4010) | 2026 | Semester 2

Name: B.M.P.U.Balasooriya

IT No: IT22927248

## 1.	Docker Setup
<table>
  <tr>
    <td><b>Project Structure</b></td>
    <td><b>docker.compose.yml</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/779a1bf8-fa58-4430-8362-6f6137f60569" width="350" /></td>
    <td><img src="https://github.com/user-attachments/assets/8ceec433-408d-498f-8851-2bb45cf28665" width="550" /></td>
  </tr>
</table>

## 2.	Dockerfiles for each service
<table>
  <tr>
    <td><b>Dockerfile for item-service</b></td>
    <td><b>Dockerfile for api-gateway</b></td>
    <td><b>Dockerfile for order-service</b></td>
    <td><b>	Dockerfile for payment-service</b></td>
  </tr>
  <tr>
    <td><img width="322" height="192" alt="Screenshot 2026-03-02 212413" src="https://github.com/user-attachments/assets/15df4634-2068-47a6-8299-df4c84d9bd18" /></td>
    <td><img width="325" height="189" alt="Screenshot 2026-03-02 212358" src="https://github.com/user-attachments/assets/0369a4b0-b76e-4820-a0b3-952f4bb120ad" /></td>
    <td><img width="340" height="197" alt="Screenshot 2026-03-02 212429" src="https://github.com/user-attachments/assets/f196de17-8d1f-4b22-bb8e-3437a48e4c36" /></td>
    <td><img width="342" height="194" alt="Screenshot 2026-03-02 212441" src="https://github.com/user-attachments/assets/27d0307f-1374-4203-a47b-a8bdf795c4d5" /></td>
  </tr>
</table>


 ### Terminel -> docker-compose up --build        
 
<img width="1159" height="334" alt="Screenshot 2026-03-02 213028" src="https://github.com/user-attachments/assets/a36de282-7786-4455-b4fa-1e2626feb4dd" />

## 3.	API testing

### Items 
•	GET /items ----Item Returns list of all items
<img width="1383" height="611" alt="Screenshot 2026-03-02 205837" src="https://github.com/user-attachments/assets/6c4c799d-35bf-47ce-85f0-5f0a2919a302" />

•	POST /items ---- Item Create a new item
<img width="1401" height="716" alt="Screenshot 2026-03-02 205239" src="https://github.com/user-attachments/assets/5725de95-1edf-4cc0-ad7e-f092a9b3f01a" />

•	GET /items/{id} ---- Item Get item by ID 
 <img width="1377" height="807" alt="Screenshot 2026-03-02 205309" src="https://github.com/user-attachments/assets/1f7682a2-fda8-4c0f-af6c-ec01b5b473d9" />

### Orders
•	GET /orders ---- Order Returns all orders 
 <img width="1379" height="757" alt="Screenshot 2026-03-02 205638" src="https://github.com/user-attachments/assets/7e3d8b81-03e6-4fa2-8782-e5fa5e7450f7" />

•	POST /orders ---- Order Place a new order 
<img width="1393" height="784" alt="Screenshot 2026-03-02 205533" src="https://github.com/user-attachments/assets/e2227a40-0c37-4a0d-9f06-4db51a26a635" />
 
•	GET /orders/{id} ---- Order Get order by ID 
<img width="1378" height="766" alt="Screenshot 2026-03-02 205614" src="https://github.com/user-attachments/assets/312c3fb4-85a7-4c70-9d5b-4a995c79fbbc" />

### Payments
•	GET /payments ---- Payment Returns all payments 
<img width="1378" height="574" alt="Screenshot 2026-03-02 210119" src="https://github.com/user-attachments/assets/ebdab008-cbcf-4bec-90b5-1041ef5ab18b" />

•	POST /payments/process ---- Payment Process a payment 
<img width="1377" height="718" alt="Screenshot 2026-03-02 210014" src="https://github.com/user-attachments/assets/45fd0c66-8118-4b12-aded-fcc52c23391c" />

•	GET /payments/{id} ---- Payment Get payment status
<img width="1374" height="636" alt="Screenshot 2026-03-02 210101" src="https://github.com/user-attachments/assets/96f94c98-fc67-482a-8bc6-fa84bccfd7e6" />
 


