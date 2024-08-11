# 📦ELASTIC CLOUD COMPUTING (EC2)

<div align="center">
<img src="https://digitalcloud.training/wp-content/uploads/2022/01/Amazon-EC2.jpg?update_image_id_1689017686"/>
</div>

An EC2 instance (Elastic Compute Cloud instance) in AWS (Amazon Web Services) is a virtual server that you can use to run applications on the AWS cloud infrastructure. EC2 instances provide resizable compute capacity, making it easier to scale up or down based on your needs.

## EC2 

Amazon Elastic Compute Cloud (EC2) is a service provided by Amazon Web Services (AWS) that allows users to rent virtual servers, known as instances, to run applications in the cloud. EC2 offers a range of instance types with varying combinations of CPU, memory, storage, and networking capacity, allowing users to choose the most appropriate instance type for their needs.

Suppose instead of taking AWS EC2, we consider taking a dedicated set of servers, so, what all we might have to face:

* Now for using these servers, we have to hire an IT team which can handle them.

* Also, having a fault in the system is unavoidable, therefore we have to bear the cost of getting it fixed, and if you don’t want to compromise on your up-time you have to keep your systems redundant to other servers, which might become more expensive.

* Your own purchased assets will depreciate over the period of time, however, as a matter of fact, the cost of an instance have dropped more than 50% over a 3-year period, while improving processor type and speed. So eventually, moving to Cloud is all more suggested.

* For scaling up we have to add more servers, and if your application is new and you experience sudden traffic, scaling up that quickly might become a problem.

## ⚡ Instance

An EC2 instance in AWS (Amazon Web Services) is a virtual server that provides resizable compute capacity in the cloud. It allows users to run applications on virtual machines with customizable configurations of CPU, memory, storage, and networking resources. 

## ⚡ Resizable

They are re-sizable because you can quickly scale up or scale down the number of server instances you are using if your computing requirements change.

## ⚡ types of Instances


1. **General Purpose**:
   - **T3/T3a**: Balance of compute, memory, and network resources (burstable performance).
   - **T2**: Previous generation burstable performance instances.
   - **M6g/M5/M5a/M5n/M4**: General-purpose instances with a balance of compute, memory, and network resources.

2. **Compute Optimized**:
   - **C6g/C5/C5a/C5n/C4**: Instances optimized for compute-intensive applications that benefit from high-performance processors.

3. **Memory Optimized**:
   - **R6g/R5/R5a/R5n/R4**: Instances optimized for memory-intensive applications.
   - **X1/X1e**: High memory instances for large-scale, in-memory applications.
   - **z1d**: High compute and high memory for high-performance databases and in-memory applications.

4. **Storage Optimized**:
   - **I3/I3en**: Optimized for applications that require high, sequential read and write access to large data sets on local storage.
   - **D2**: Dense-storage instances with large amounts of HDD storage.

5. **Accelerated Computing**:
   - **P4/P3**: GPU instances for machine learning and high-performance computing.
   - **G4ad/G4dn**: Instances with GPU acceleration for graphics-intensive and machine learning applications.
   - **F1**: FPGA instances for hardware acceleration.

6. **High Memory**:
   - **u-6tb1/u-9tb1/u-12tb1**: Instances offering large memory sizes for in-memory databases like SAP HANA.


- **General Purpose**: `t3.micro`, `t3.large`, `m5.large`, `m5.2xlarge`
- **Compute Optimized**: `c5.large`, `c5.4xlarge`
- **Memory Optimized**: `r5.large`, `r5.2xlarge`, `x1e.xlarge`
- **Storage Optimized**: `i3.large`, `i3en.12xlarge`
- **Accelerated Computing**: `p3.2xlarge`, `g4dn.xlarge`
- **High Memory**: `u-6tb1.metal`


## ⚡ Burstable Performance of T2/T3 Instances 

Amazon EC2 T2 and T3 instances are designed to provide a baseline level of CPU performance with the capability to burst above the baseline when needed. This burstable performance model is particularly suitable for workloads that don't require constant high CPU performance but may need occasional bursts of higher performance.

T2 instances are burstable instances, meaning the CPU performs at a baseline, say 20% of its capability. When your application needs more than 20% of the performance of the CPU, the CPU enters into a burst mode giving the higher performance for a limited amount of time, therefore work happens faster.

### ⭐ Burstable CPU Credits

* **Accrual of Credits**: When an instance is running below its baseline, it earns CPU credits. Each credit provides the performance of a full CPU core for one minute.

* **Spending Credits**: When an instance needs to perform tasks that require more CPU than the baseline provides, it spends its accumulated credits to increase its CPU performance up to 100% of a single core.

* **Credit Balances**: The instances have a maximum credit balance they can accrue. For example, a t3.micro instance can accumulate up to 144 CPU credits.

* **T2 Unlimited**: In Unlimited Mode, if the instance needs more CPU credits than it has, it can continue to burst above the baseline by borrowing credits. If the instance’s average CPU utilization over a 24-hour period exceeds its baseline, charges may apply.


## ⚡ Key Pair

Amazon EC2 uses public–key cryptography to encrypt and decrypt login information. Public–key cryptography uses a public key to encrypt a piece of data, such as a password, then the recipient uses the private key to decrypt the data. The public and private keys are known as a key pair.

## ⚡ Elastic Load Balancing

Elastic Load Balancing (ELB) is a service provided by AWS that automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones (AZs). It helps ensure that the application is highly available, fault-tolerant, and scalable.

## ⚡ Elastic IP Address

Elastic IP Addresses are static, public IPv4 addresses designed for dynamic cloud computing. They are associated with your AWS account and can be used to mask the failure of an instance or software by remapping the address to another instance within the same region.

---