---
title: "Understanding Inventory Risk in Market Making"
description: "A short placeholder on the role of inventory in a quoting problem."
locale: en
route: inventory-risk
date: 2026-09-09
category: "Market Microstructure"
tags:
  - Market Making
  - Market Microstructure
  - Trading
draft: false
---

> **Placeholder note.** This is a short structural example, not a complete research article or a description of any proprietary trading process.

## The basic intuition

An inventory makes a market maker sensitive to the next price move. A compact teaching expression can write a reservation price as:

$$
r_t = S_t - q_t \gamma \sigma^2 (T - t)
$$

where $q_t$ is inventory, $\gamma$ is risk aversion and $\sigma$ is a volatility input. The expression is illustrative: real models depend on assumptions, market rules, execution risk and costs.

> **Example output — Reservation price.** An interactive control panel can be added to the dedicated project page once a concrete educational model is selected.

## Implementation sketch

```python
import numpy as np
import pandas as pd

reservation_price = mid_price - inventory * risk_aversion * volatility**2 * horizon
```

The full article can add model assumptions, a synthetic simulation, a visualization and a practical interpretation in that order.
