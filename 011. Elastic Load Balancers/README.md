# Elastic Load Balancers

In AWS, a load balancer is a service that helps distribute incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones (AZs). AWS offers different types of load balancers, each tailored for specific use cases, ensuring that your application is both scalable and highly available. The primary AWS load balancing services fall under the Elastic Load Balancing (ELB) offering.


## Classic Load Balancers 

Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones. It monitors the health of its registered targets, and routes traffic only to the healthy targets. Elastic Load Balancing scales your load balancer as your incoming traffic changes over time. It can automatically scale to the vast majority of workloads.