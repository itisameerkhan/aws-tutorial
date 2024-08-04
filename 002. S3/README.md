# SIMPLE STORAGE SERVICE

<div align="center">
<img src="https://media.licdn.com/dms/image/D4E12AQHubyzYaJ3aCw/article-cover_image-shrink_720_1280/0/1712286134253?e=2147483647&v=beta&t=71ymp7BvKACthqMuxHIFhmvV4pF463B-uGiHacCe-9s"/>
</div>

Amazon Simple Storage Service (S3) is a storage for the internet. It is designed for large-capacity, low-cost storage provision across multiple geographical regions. Amazon S3 provides developers and IT teams with Secure, Durable and Highly Scalable object storage.

S3 is Secure because AWS provides:

1. Encryption to the data that you store. It can happen in two ways:

* Client Side Encryption

* Server Side Encryption

2. Multiple copies are maintained to enable regeneration of data in case of data corruption

3. Versioning, wherein each edit is archived for potential retrieval.

## ⭐ What kind and how much of data one can store in AWS S3?

You can store virtually any kind of data, in any format, in S3 and when we talk about capacity, the volume and the number of objects that we can store in S3 are unlimited.

* An object is the fundamental entity in S3. It consists of data, key and metadata.

When we talk about data, it can be of two types-

* Data which is to be accessed frequently.

* Data which is accessed not that frequently.

### ⚡ S3 Standard

#### Description:

* Designed for frequently accessed data.

* Provides high durability, availability, and performance.

#### Use Case:

Websites, content distribution, and data analytics.

#### Example:

**Hosting a Website**: You have a dynamic website where images, videos, and other media files are frequently accessed by users. Using S3 Standard ensures that these files are quickly accessible with high availability and performance.

### ⚡ S3 Standard-IA (Infrequent Access)

#### Description:

* Designed for data that is accessed less frequently but requires rapid access when needed.

* Lower storage cost compared to S3 Standard, with a retrieval cost.

#### Use Case:

Backups, disaster recovery, and long-term storage.

#### Example:

**Disaster Recovery**: You have critical backup files that you don't need to access regularly but must be available immediately in case of a disaster. S3 Standard-IA provides a cost-effective solution for storing these backups.

### ⚡ S3 Glacier

#### Description:

Designed for long-term archival and retrieval of data.
Low storage cost with higher retrieval times.

#### Use Case:

Archival of data that is infrequently accessed.

#### Example:

**Compliance Archiving**: You need to store financial records for several years to comply with regulatory requirements. These records are rarely accessed, making S3 Glacier a cost-effective choice for long-term storage.

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*bZ2-645HIKunzArwF7RDlA.png" />
</div>

---

## ⭐ How is data organized in S3?

Data in S3 is organized in the form of buckets.

* A Bucket is a logical unit of storage in S3.

* A Bucket contains objects which contain the data and metadata.

Before adding any data in S3 the user has to create a bucket which will be used to store objects

## ⭐ Where is your data stored geographically?

You can self-choose where or in which region your data should be stored. Making a decision for the region is important and therefore it should be planned well.

These are the 4 parameters to choose the optimal region –

* Pricing

* User/Customer Location

* Latency

* Service Availability

## ⭐ Let’s understand this through an example:

Suppose there is a company which has to launch these storage instances to host a website for the customers in the US and India.

To provide the best experience, the company has to choose a region, which best fits its requirements.

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*z5aq77vqqiC6w9z1n9hqUw.png" />
</div>

Now looking at the above parameters, we can clearly identify, that N Virginia will be the best region for this company because of the low latency and low price. Irrespective of your location, you can select any region which might suit your requirements, since you can access your S3 buckets from anywhere.

Talking about regions, let’s see about the possibility of having a backup in some other availability region or you may want to move your data to some other region. Thankfully, this feature has been recently added to the AWS S3 system and is pretty easy to use.

## ⭐ Cross-region Replication

As the name suggests, Cross-region Replication enables the user to either replicate or transfer data to some other location without any hassle.

This obviously has a cost to it which has been discussed further in this article.

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*K8nQqbopCO1nECLaJAnSTw.png" />
</div>

## ⭐ How is the data transferred?

Besides traditional transfer practices that are over the internet, AWS has 2 more ways to provide data transfer securely and at a faster rate:

* Transfer Acceleration

* Snowball

<div align="center">
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*7zMS7eiDp99Q8YaMnePm2g.png" />
</div>

**Transfer Acceleration** enables fast, easy and secure transfers over long distances by exploiting Amazon’s CloudFront edge technology.

**CloudFront** is a caching service by AWS, in which the data from client site gets transferred to the nearest edge location and from there the data is routed to your AWS S3 bucket over an optimized network path.