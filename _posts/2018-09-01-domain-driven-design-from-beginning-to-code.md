---
layout: post
title:  "Domain-driven design, from the beginning to code"
date:   2018-09-01
category: DDD
image: assets/img/blog/2018-09-01-domain-driven-design-from-beginning-to-code/cover.jpg
author: Maicon Heck
tags: ddd
---

When we talk about Domain-Driven Design (DDD), many developers immediately think about the architectural style and the tactical patterns of DDD.

And of course, we are passionate about it, after all, we are developers!

However, to work with DDD we need to develop some more skills, such as learning to model domains effectively, and for that, we need to become what Eric Evans calls **Knowledge Crunchers — someone prepared to receive, filter and organize a ton of information.**

Domain-Driven Design is, first and foremost, **communication**. In DDD modeling and implementation go hand in hand.

Domain experts (users, analysts, and others) along with developers and architects work hand in hand with a common goal: **to build domain-driven software to meet customer needs.**

To do this, in the first place, **it is necessary that everyone uses a common language** and that there is no translation in the communication between team members.

The team, therefore, develops a ubiquitous (general and universal) language that expresses the knowledge of business experts for the domain model (for the code).

## Ok, I should guide my project by the domain, but what exactly is the domain?
![I should guide my project by the domain, but what exactly is the domain?](/assets/img/blog/2018-09-01-domain-driven-design-from-beginning-to-code/1.jpg)

The domain of a software are the activities performed by an user and their area of interest.

The domain can be as complex as the processes and data it comprises.

## And the model?
> A model is, according to Evans (2004, p. 2) “a simplification. It is an interpretation of reality that abstracts the aspects relevant to solving the problem at hand and ignores extraneous detail”.

With a model we can:
- Abstract the complexity of the business through **a simplified representation of it — a model**.

- The model **serves as something common and palpable to all team members**, which, together with the ubiquitous language, allows everyone to actively participate in the progressive construction of the same.

- The model (as long as it's done correctly) **guarantees that what is being specified is what is being implemented**.

- The model **is the means of communication used by the team**. Thanks to the link between the model and implementation, developers can speak in the language of the software when communicating with domain experts (without having to translate the message).

- The model **is distilled knowledge** — it's how the team agrees to structure the knowledge extracted from the domain.

EVANS (2004)

The model is evolutionary: **With each iteration between domain experts and the technical team, the model becomes deeper and more expressive, richer, and developers transfer this source of value to the software.**

Thus, the model is gradually enriched with the expertise of domain experts distilled by the developers, **making the team gain more and more insight into the business**, and that knowledge is transferred to the model (to the code) through the patterns of the DDD.

When new business rules are added and/or existing rules are changed or removed, the implementation is refactored to reflect these model changes in the code.

In the end, the model (which ultimately will be the software) will express the business with a wealth of knowledge.

> DDD puts a lot of knowledge into the model that deeply reflects the domain.
>
> **This is only possible through collaboration between those who know the domain and those who know how to create software.**
> And because development is iterative, that collaboration continues throughout the life of the project.

That is, Domain-Driven Design leads us to build software guided by knowledge and business modeling before any appeal for technology.

That said, for us to implement the domain model, of course, we need to code.

And for that, DDD offers us its tactical design patterns, among them I highlight:
- Domain isolation with Layered or Clean Architecture (a.k.a. Ports and Adapters, Hexagonal Architecture).

- Model representation through Entities, Value Objects, Aggregates and Modules.

- Lifecycle management of model objects with Aggregates and Repositories.

- Domain Services to abstract routines that don't fit within the Domain Model.

- Factory Methods to simplify creating instances of complex domain objects.

I will demonstrate each of them in practice in the next articles in this series on Domain-Driven Design. But now let's get back to the theory, because **it's necessary to have a good foundation if we want to build a really effective model**.

## The 5 ingredients of an effective model:
- **Link the model with the implementation:** this link is made from the beginning, when the model is still primitive and will be maintained until the end. This bond is deep, **the implementation must 100% reflect the model**.

- **Cultivate a language based on the model:** in the beginning it will be necessary for developers and domain experts to understand each other's terms, but later both will speak the same language, organizing the communication sentences in a structure consistent with the model and without ambiguities.

- **Develop a knowledge-rich model:** Objects have associated data and behaviors. The model should not just be a data structure (anemic model), it should capture domain knowledge to solve domain problems.

- **Distill the model:** The model must be refined. Just as important concepts must be added, concepts that have no relevance must be removed. **With each iteration the model will get richer and have more value**.

- **Brainstorming and experimentation: Direct interaction between developers and domain experts**, through brainstorming sessions and on-the-spot diagramming, turns discussions into **model labs**, where various variations of experiments can be exercised and the result can be used if it shows value or discarded otherwise.

EVANS (2004)

## The model must be rich!
![The model must be rich!](/assets/img/blog/2018-09-01-domain-driven-design-from-beginning-to-code/2.jpg)
- The model must be rich in knowledge.️️️

- A rich model is composed of expressive code, business rules, and well-defined processes.

- It expresses the knowledge it contains and solves domain problems.

- It's the opposite of an anemic model where classes are just data schemas with no behavior.

## Conclusion
Next time you are inferring whether a project is using Domain-Driven Design, before looking at the IDE's Solution Explorer for the architectural style and patterns, first see if the team is using an agile method and doing knowledge crunching.

I've seen many self-styled projects "with DDD", which despite implementing some of DDD's tactical patterns, the model was far from reflecting the domain.

## References
Evans, Eric. Domain-Driven Design: Tackling Complexity in the Heart of Software. 2004.

---

{% include next-article.md title="PART 2: Entities and Value Objects" url="../../../10/08/domain-driven-design-the-building-blocks-part2/" %}