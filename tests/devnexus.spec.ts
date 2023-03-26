import {expect, test} from '@playwright/test';

test('no changes have been made to the Devnexus 2023 schedule', async ({page}) => {
  const days = [
    {
      day: 'Wednesday', times: [
        {time: '07:30', talks: [{room: 'Foyer', name: 'Registration & Breakfast'}]},
        {
          time: '09:00',
          talks: [{room: 'Sydney Marcus', name: 'KEYNOTE Five skills to force multiply your technical talent'}],
        },
        {
          time: '10:00', talks: [
            {room: '302', name: 'Learn Kubernetes the Java way'},
            {room: '303', name: 'Jakarta EE or Spring? Real world testimonies'},
            {room: '304', name: 'Full-stack reactive with Spring Boot & React'},
            {room: '305', name: 'Dataframes, Collections, and Streams in Java'},
            {room: '311', name: 'The Anatomy of Java Vulnerabilities'},
            {room: '312', name: 'Avoiding common pitfalls with modern microservices testing'},
            {room: '313', name: 'Observability For Java Devs - 2023 Edition'},
            {room: '314', name: 'Spring Recipes: A Collection of Common-Sense Solutions'},
            {room: '315', name: 'Java\'s Hidden Gems: Tools and Libraries'},
            {room: '402', name: 'Event sourcing - the good parts'},
            {room: '403', name: 'BDD from the Trenches'},
            {room: 'Sydney Marcus', name: 'Software architecture in a DevOps world'},
          ],
        },
        {time: '11:00', talks: [{room: 'Foyer', name: 'Morning Break'}]},
        {
          time: '11:30', talks: [
            {room: '302', name: 'Secrets of Performance Tuning Java on Kubernetes'},
            {room: '303', name: 'Upgrading a Legacy Java EE App with Style'},
            {room: '304', name: 'Cross-Platform Cloud CI/CD'},
            {room: '305', name: 'Cooking Recipes, Coding, an IDE and YOU'},
            {room: '311', name: 'How to report a vulnerability: Responsible Disclosure for Developers'},
            {room: '312', name: 'Live Coding Quarkus: Supersonic, Subatomic Kubernetes-Native Java'},
            {
              room: '313',
              name: 'Let\'s get Functional: The fast path to smart serverless with Spring Cloud Function & Azure Functions',
            },
            {room: '314', name: 'Vector Similarity Search in Spring with Redis Stack'},
            {room: '315', name: 'The Cloud Native Compiler: JIT-as-a-Service'},
            {room: '402', name: 'Functional Kotlin'},
            {room: '403', name: 'Just Code isn\'t enough, A successful project needs more....'},
            {room: 'Sydney Marcus', name: 'Scaling Batch Applications '},
          ],
        },
        {time: '12:30', talks: [{room: 'Foyer', name: 'Lunch'}]},
        {
          time: '13:30', talks: [
            {room: '302', name: 'Getting started with Azure Spring Apps'},
            {room: '303', name: 'Jakarta EE and MicroProfile Highlights'},
            {room: '304', name: 'Vue for React Developers'},
            {room: '305', name: 'Know your Java?'},
            {room: '311', name: 'Wargames - Java vulnerabilities and why you should care'},
            {room: '312', name: 'Quarkus for Spring Developers'},
            {room: '313', name: 'Natively Cloud Native - Building Agile Microservices with Micronaut'},
            {room: '314', name: 'Beyond REST and CRUD: Integration patterns in Microservices'},
            {room: '315', name: 'Patterns, Predictions, and Programming '},
            {room: '402', name: 'Writing Gradle plugins that users will love'},
            {room: '403', name: 'Developer Productivity - clean | secure | fast'},
            {room: 'Sydney Marcus', name: 'Beginners guide to balance your data across Apache Kafka partitions'},
          ],
        },
        {time: '14:30', talks: [{room: 'Foyer', name: 'Afternoon Break'}]},
        {
          time: '15:00', talks: [
            {room: '302', name: 'The Right Number of Partitions for a Kafka Topic'},
            {room: '303', name: 'Jakarta EE for Spring Developers'},
            {room: '304', name: 'From Your Perspective'},
            {room: '305', name: 'How to Fix Your Technical Debt Dilemma'},
            {room: '311', name: 'Empowering Developers to Embrace Security'},
            {
              room: '312',
              name: 'Hyper-Automate your Cloud Native Journey with Kubernetes Custom Resources and Operators',
            },
            {room: '313', name: 'Progressive Delivery with Kubernetes and Argo Rollouts'},
            {room: '314', name: 'Spring Modulith: What the what?'},
            {room: '315', name: 'Enhancing Java applications for the cloud'},
            {
              room: '402',
              name: 'If it isn\'t hot, it doesn\'t deliver: Apache Pinot, Food Delivery and why real-time analytics matter.',
            },
            {room: '403', name: 'Five ways open source will slow you down'},
            {
              room: 'Sydney Marcus',
              name: 'Don’t Reimplement Distributed Consensus Algorithms! (Learn to Use Them Instead)',
            },
          ],
        },
        {
          time: '16:00', talks: [
            {room: '302', name: 'Service Mesh for Java Developers'},
            {room: '303', name: 'Deep Dive MicroProfile 6.0 with Jakarta EE 10 Core Profile'},
            {room: '304', name: 'Properly Managing Data In React'},
            {room: '305', name: 'Refactor your code to Java 20'},
            {room: '311', name: 'Securing Your Software Supply Chain One Open Source Project at a Time'},
            {
              room: '312',
              name: 'KEDA, HPA, and VPA? An Introduction to Scaling a Event-Driven Workloads on Kubernetes',
            },
            {
              room: '313',
              name: 'Weathering the Cloud Storm: Building Resilient Geo-Distributed Apps with Spring Cloud',
            },
            {room: '314', name: 'Bootiful Spring Boot 3'},
            {room: '315', name: 'Asynchronous Programming in Java using Virtual Threads'},
            {room: '402', name: 'Mastering the Linux command line'},
            {room: '403', name: 'Observing Minecraft'},
            {room: 'Sydney Marcus', name: 'Machine Learning Data Pipelines with Kafka and Tensorflow'},
          ],
        },
        {time: '17:00', talks: [{room: 'Foyer', name: 'Conf Reception and TECH NERD TRIVIA!'}]},
        {time: '17:30', talks: [{room: '315', name: 'The OffHeap Podcast. Devnexus Edition'}]},
      ],
    },
    {
      day: 'Thursday',
      times: [
        {time: '07:45', talks: [{room: '402', name: 'Women in Technology Breakfast'}]},
        {time: '08:00', talks: [{room: 'Foyer', name: 'Breakfast'}]},
        {
          time: '09:00',
          talks: [{
            room: 'Sydney Marcus',
            name: 'KEYNOTE Harnessing the Hyper-dimensional Mind: Visualizing Brain Computer Interfaces',
          }],
        },
        {
          time: '10:00', talks: [
            {room: '302', name: 'Spring Cloud Gateway: What is it and What\'s New.'},
            {room: '303', name: 'Jakarta EE 10 and Beyond'},
            {room: '304', name: 'Deceptive Patterns & FAST'},
            {room: '305', name: 'Loom Virtual Threads in the JDK 20'},
            {room: '311', name: 'Don\'t Trust anyone.... Secure your Microservices with ZeroTrust approach.'},
            {room: '312', name: 'Java to Kubernetes for dummies'},
            {room: '313', name: 'Introduction to Rancher Desktop'},
            {room: '314', name: 'Apache Pulsar Development 101 with Java'},
            {room: '315', name: 'Journey to cloud : leave no Java workload behind'},
            {room: '402', name: 'Wired! How your brain learns new (programming) languages'},
            {room: '403', name: 'Shifting Left with Kubernetes'},
            {room: 'Sydney Marcus', name: 'My children will never deploy active-passive.'},
          ],
        },
        {time: '11:00', talks: [{room: 'Foyer', name: 'Morning Break'}]},
        {
          time: '11:30', talks: [
            {room: '302', name: 'The Future is Serverless - with Java'},
            {room: '303', name: '5 years of Jakarta EE Panel: a look into the future'},
            {room: '304', name: 'Typescript Deep Dive'},
            {room: '305', name: 'To Java 20 and Beyond!'},
            {room: '311', name: 'A Community Approach to OSS Distribution'},
            {room: '312', name: 'Change Data Streaming Patterns in Distributed Systems'},
            {room: '313', name: 'Knative Core Concepts! And Spiders!'},
            {room: '314', name: 'Introducing Spring for Apache Pulsar'},
            {room: '315', name: 'Leading Edge! Changing the Java World with Loom, Panama, and More'},
            {room: '402', name: 'The Programmer\'s Guide to JDK Flight Recorder'},
            {room: '403', name: 'Things we\'ve learned about better software delivery principles through a pandemic'},
            {room: 'Sydney Marcus', name: 'From Monolith to (µ)Services. What happens with my Data?'},
          ],
        },
        {time: '12:30', talks: [{room: 'Foyer', name: 'Lunch'}]},
        {
          time: '13:30', talks: [
            {room: '302', name: 'Next up: Spring Security 6'},
            {room: '303', name: 'Jakarta EE integration testing'},
            {
              room: '304',
              name: 'I Can Do THAT in a Browser? Improving User Experience with Lesser Known Native JS APIs',
            },
            {room: '305', name: 'Panel Session: Moving the Java Community Forward'},
            {room: '311', name: 'Keeping It SAST-y'},
            {room: '312', name: 'A Call to (GitHub) Actions!'},
            {room: '313', name: 'Make your container apps smarter with sidecars and actions'},
            {room: '314', name: 'GraphQL from the Ground Up'},
            {room: '315', name: 'Say the Words: Modern Java with JavaFX for Rich Client UIs'},
            {room: '402', name: 'What\'s Cooking in Maven?'},
            {room: '403', name: 'Unlocked : Growing Your Skills Through Open Source Development And Civic Hacking'},
            {room: 'Sydney Marcus', name: 'Best of Both Worlds: Apache Pulsar and Apache Kafka'},
          ],
        },
        {time: '14:30', talks: [{room: 'Foyer', name: 'Afternoon Break'}]},
        {
          time: '15:00', talks: [
            {room: '302', name: 'Reduce System Fragility with Terraform'},
            {room: '303', name: 'From javax to jakarta, the path paved with pitfalls'},
            {room: '304', name: 'Demystifying The Dreaded A/B Test'},
            {room: '305', name: 'Data Focused programming with Pattern Matching in Java'},
            {room: '311', name: 'Best Practices for Securing Cloud Native Applications'},
            {room: '312', name: 'Event-driven autoscaling for Serverless Java'},
            {room: '313', name: 'Testing cloud-native applications with ease!'},
            {room: '314', name: 'Spring Cloud Stream Past, Present, and Future.'},
            {room: '315', name: 'From Java 17 to 21 and beyond: Loom, Amber and Valhalla'},
            {room: '402', name: 'Unlocking Value from Time Series Data with Open Source Tools in Java'},
            {room: '403', name: 'Calculating the Value of Pie: Real-Time Survey Analysis With Apache Kafka®'},
            {room: 'Sydney Marcus', name: 'Hands-on introduction to OpenTelemetry tracing'},
          ],
        },
        {
          time: '16:00', talks: [
            {room: '302', name: 'CI/CD Pipelines : What, Why, How?'},
            {room: '303', name: 'Let\'s take a look at how a Jakarta EE cloud-native application should look!'},
            {room: '304', name: 'Creating a Modern Web App Using Spring Boot and Vue.js with JHipster'},
            {room: '305', name: 'Revisiting Design Patterns after 20'},
            {room: '311', name: 'Minimum Viable Security for Cloud Native Stacks'},
            {room: '312', name: 'Why You Should Be Doing Contract First API Development'},
            {room: '313', name: 'Kontain Your Spring'},
            {room: '314', name: 'To Production and Beyond: Observability for Modern Spring Applications'},
            {room: '315', name: 'Should I upgrade my Java?'},
            {room: '402', name: 'Going Beyond Test-Driven Development'},
            {room: '403', name: 'CAPES aren\'t just for super heroes... They\'re for you too!'},
            {room: 'Sydney Marcus', name: 'JSON Data Modeling in Document Databases'},
          ],
        },
        {time: '17:00', talks: [{room: 'Sydney Marcus', name: 'Mega Raffle and Conf Close'}]},
      ],
    },
  ];

  await page.goto('https://devnexus.com/schedule');
  let allDays = Array.from(days.entries());
  for (const [dayIndex, dayObject] of allDays) {
    const dayLocator = page.locator('.apr13').nth(dayIndex);
    let allTimes = Array.from(dayObject.times.entries());
    for (const [timeIndex, timeObject] of allTimes) {
      const timeLocator = dayLocator.locator('.until09').nth(timeIndex);
      let allTalks = Array.from(timeObject.talks.entries());
      for (const [talkIndex, talkObject] of allTalks) {
        const talkLocator = timeLocator.locator('.track, .foyer').nth(talkIndex);
        await expect(talkLocator.locator('a').first(), `Looking for name ${talkObject.name}`).toHaveText(talkObject.name);
        await expect(talkLocator.locator('.pull-right'), `Looking for room for ${talkObject.name}`).toContainText(talkObject.room);
      }
    }
  }
});