# ELASTIC LOAD BALANCING (ELB)

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:1022/1*uM9hKH4udB8MqTqHMFRYzQ.png" />
</div>

Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. ELB ensures that no single instance bears too much load, improving fault tolerance and availability.

* Distributes the traffics to available resources (servers)

* Enables parallel processing.

* Assure the fastest performance of the app.

<div align="center">
<img src="https://i0.wp.com/s5.postimage.org/z7vis4g6f/AWS_3_D_Example_from_Cloudcraft.co.png?ssl=1" />
</div>

## ⭐ OSI Layers

The OSI (Open Systems Interconnection) model is a conceptual framework used to understand and implement network communications. It divides network functions into seven distinct layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.

<div align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7D8RQHx-QiWVO0Siz4SpVwEgCQtLVp-yGgA&s" />
</div>

### ⚡ 1. Application Load Balanvers

* **Protocol**: `http`,`https`

* **OSI Layer**: Application layer

* **1 ELB**:  Many Instances (Microservices)

* **Routing mechanism**: Path based routing

* **Industry Adoption**: 98%

![demo](https://miro.medium.com/v2/resize:fit:1400/1*JKv06SJiCDJqExr7dUBCyA.jpeg)


### ⚡ Network Load Balancers

* **Protocol**: `http`,`https`, `tcp`

* **OSI Layer**: Application layer & Transport layer

* **1 ELB**:  Many Instances (Microservices)

* **Routing mechanism**: Port based routing (0-65535)

* **Industry Adoption**: <= 5%

![demo](https://labresources.whizlabs.com/745bf42a4162a934ebd0791585a18376/42._creating_and_configuring_network_load_balancer_in_aws_27_25.png)

### ⚡ Classic Load Balancers (previous gen LB)

* **Protocol**: `udp`,`tls`, `tcp`

* **OSI Layer**: Transport layer

* **1 ELB**:  1 Instances (Monolythic)

* **Routing mechanism**: Port based routing (0-65535)

* **Industry Adoption**: <= 2%

---

![demo](../ASSETS/demo4.png)

Scenario: 

* **business**: "amazon.com"

* **Time**: Season sale

* **Total Hits**: If(2000)

* **ELB**: Cannot handle (server crashed)

## ⭐ Auto Scaling

Auto Scaling in AWS refers to the capability of automatically adjusting the number of compute resources allocated to your application based on current demand. This ensures that you have the right amount of resources at all times, which improves availability and reduces costs.

![demo](../ASSETS/demo5.png)

> [!NOTE]
> This process refers to scale-up

Scenario: 

* **business**: "amazon.com"

* **Time**: After sale (normal time)

* **Total Hits**: If(1000)

![demo](../ASSETS/demo4.png)

> [!NOTE]
> This process refers to scale-down

![demo](../ASSETS/demo6.png)