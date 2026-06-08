# Physiology

> **Legend:** 🔴 CORE (must know) · 🟡 IMPORTANT (frequently tested) · 🟢 DETAIL (good to know) · ⚡ NAVLE classic buzzword / recognition prompt

> **NAVLE weight: low-moderate.** Pure mechanism is rare; physiology integrated into clinical scenarios is constant — **ECG interpretation, acid-base, K⁺ disorders, hormone-driven disease**.

---

## 1. Cardiovascular Physiology

### Cardiac Cycle 🔴
- **Systole** = ventricular contraction:
  1. **Isovolumetric contraction** (all valves closed; pressure rising; "lub" = S1 = AV valves close)
  2. **Ejection** (semilunar valves open; blood leaves)
- **Diastole** = ventricular relaxation:
  1. **Isovolumetric relaxation** (all valves closed; "dub" = S2 = semilunar valves close)
  2. **Rapid filling** (AV valves open)
  3. **Diastasis** (slow filling)
  4. **Atrial kick** (atrial contraction completes filling — small in normal sinus rhythm; lost in atrial fibrillation)

### Cardiac Output 🔴
- **CO = HR × SV** (mL/min)
- Normal CO dog: ~100 mL/kg/min
- **Stroke volume (SV)** depends on three factors:
  - 🔴 **Preload** = LVEDV (left ventricular end-diastolic volume) ← venous return
  - 🔴 **Afterload** = resistance ventricle works against ← systemic vascular resistance, BP
  - 🔴 **Contractility (inotropy)** = intrinsic strength of contraction ← sympathetic tone, Ca²⁺, drugs

### Frank-Starling Law 🔴
- ↑ preload → ↑ myocardial stretch → ↑ stroke volume (within physiologic limits)
- 🔴 ⚡ **Curve shifts down/right in DCM** (failing myocardium can't generate adequate force at any preload)
- Clinical: judicious IV fluids ↑ preload → ↑ CO; excess fluid → pulmonary edema

### Cardiac Action Potentials 🔴

**Two cell types, two jobs.** Pacemaker cells exist to *fire on their own and set the rhythm* — no stable resting potential, slow Ca²⁺-driven upstroke. Working myocytes (atrial/ventricular) exist to *contract on command* — stable resting potential at −90 mV, explosive Na⁺-driven upstroke, long plateau so Ca²⁺ can drive contraction.

**Pacemaker (SA, AV nodes)** — slow response, no plateau, no stable resting potential:
- **Phase 4** — spontaneous depolarization via **funny current (If/HCN channels)** + Ca²⁺ leak. Voltage drifts up on its own toward threshold → this is what makes the cell *automatic*. **The slope of Phase 4 sets heart rate:** sympathetic steepens it (faster HR), vagal flattens it (slower HR).
- **Phase 0** — Ca²⁺ influx (slow, L-type channels). Pacemakers *can't* use fast Na⁺ channels because at their drifting Phase 4 voltage those channels stay inactivated. Slow Ca²⁺ upstroke = slow conduction = **this is why the AV node imposes a built-in delay** before the impulse reaches the ventricles.
- **Phase 3** — K⁺ efflux brings the cell back down, ready for the next Phase 4 drift.

**Ventricular myocyte** — fast response, prolonged plateau, stable resting potential:
- **Phase 0** — Na⁺ influx (rapid depolarization, fast Na⁺ channels). Resting at −90 mV, all Na⁺ channels are recovered → upstroke is **explosive** → fast conduction through Purkinje fibers → narrow synchronous QRS.
- **Phase 1** — transient K⁺ efflux + Cl⁻ influx → small dip that sets up the plateau.
- **Phase 2** — **plateau** — Ca²⁺ influx (L-type) balanced by K⁺ efflux. **The unique feature of cardiac muscle.** Holds the cell depolarized long enough for Ca²⁺ to trigger SR Ca²⁺ release and drive a strong contraction — and **keeps the cell refractory for the entire systole**, which is why the heart physically *cannot* tetanize. Essential, because a tetanized heart can't fill or eject.
- **Phase 3** — K⁺ efflux predominates → repolarization.
- **Phase 4** — K⁺ leak holds resting potential at ~−90 mV. Stable, doesn't drift, waits for the next signal from above.

🔴 **Refractory period covers most of contraction** — the cell is electrically silent for the entire systole → no tetany possible.

### ECG Interpretation 🔴

![Normal ECG with P, QRS, T waves labeled](images/physiology/ecg-normal.png)
*Normal ECG tracing — orient by the named waves before reading anything else.*

| Wave | Represents |
|---|---|
| **P** | Atrial depolarization |
| **PR interval** | AV nodal conduction delay |
| **QRS** | Ventricular depolarization |
| **ST segment** | Plateau of ventricular AP |
| **T** | Ventricular repolarization |

🔴 ⚡ **Classic ECG buzzwords**:
- **Tall tented T wave** = **hyperkalemia** (early — see full progression below)
- **Tall R wave** (>3 mV in lead II in dog) = **left ventricular enlargement**

  ![Left ventricular hypertrophy ECG — tall slender R, ST/T strain pattern](images/physiology/ecg-lvh.png)
  *LVH (lead V5 in human shown for waveform clarity) — tall slender R wave with down-sloping ST + inverted T = "strain pattern". Same gain & sweep speed as a normal trace.*

  **Why LV specifically:** the LV wall is roughly 3× thicker than the RV wall (it pumps against high systemic pressure, vs the low-resistance pulmonary circuit), so the LV already dominates the mean QRS vector — that vector points down-and-to-the-left, which is exactly the axis lead II "looks along". When LV mass increases, the vector grows even larger in the same direction → taller R in lead II. RV hypertrophy does the opposite — it shifts the vector rightward (right axis deviation), so it shows up as deep S waves in leads I and II, not a tall R.

- **Wide "M-shaped" P wave (P mitrale)** = **left atrial enlargement** (classic in MMVD)

  ![P mitrale — left atrial enlargement, two-humped P wave](images/physiology/ecg-p-mitrale.png)
  *P mitrale (lead II) — note the two distinct humps in the P wave.*

  **Why the M shape:** the P wave is actually two sequential events fused together — right atrial depolarization first, then left atrial depolarization a few milliseconds later — which normally overlap into one smooth hump. When the left atrium is enlarged, the LA component takes longer (more muscle to depolarize, more distance to travel), so it separates from the RA component and the two events become visible as distinct humps — the M shape.

- **Tall, narrow P wave (P pulmonale)** = right atrial enlargement

  ![P pulmonale — right atrial enlargement, tall narrow pointed P wave](images/physiology/ecg-p-pulmonale.png)
  *P pulmonale (lead II) — tall (>2.5 mm), narrow, pointed P wave.*

  **Why tall but not wide:** the right atrium depolarizes first, before the LA, so RA enlargement bulks up the front of the P wave — adding amplitude (taller) without prolonging duration (still narrow), because the LA still finishes last and sets the endpoint.

- **No P waves + irregularly irregular rhythm** = atrial fibrillation

  ![Atrial fibrillation ECG — no P waves, irregularly irregular QRS](images/physiology/ecg-afib.png)
  *Atrial fibrillation — wavy chaotic baseline (no P waves), irregularly irregular R-R intervals (long, short, long again).*

  **Why no P waves and irregular QRS:** in atrial fibrillation, the atria aren't depolarizing in an organized wave — instead, multiple chaotic re-entry circuits fire continuously, so there's no single coordinated P wave, just a wavy chaotic baseline. The AV node, swamped by this barrage, lets impulses through randomly — producing the irregularly irregular QRS spacing.

- **Wide bizarre QRS without P** = ventricular premature complex (VPC)

  ![Ventricular premature complex ECG — normal sinus beat followed by wide bizarre VPC](images/physiology/ecg-vpc.png)
  *VPC / PVC — normal P-QRS, then a wide bizarre QRS with no preceding P wave, followed by a compensatory pause.*

  **Why wide and P-less:** a VPC (ventricular premature complex, also called PVC) is an early beat triggered by an ectopic focus in the ventricle itself rather than the SA node. Because it bypasses the fast His-Purkinje system and spreads slowly cell-to-cell through ventricular muscle, the QRS is wide (>120 ms) and bizarre-looking. And since the atria weren't involved, there's no preceding P wave.

- **Sawtooth flutter waves** = atrial flutter

  ![Atrial flutter ECG — sawtooth waves with 4:1 AV conduction](images/physiology/ecg-atrial-flutter.png)
  *Atrial flutter (lead II) — regular sawtooth flutter waves at ~300/min with 4:1 AV conduction (one QRS per four flutter waves).*

  **Why sawtooth and regular:** in atrial flutter, the atria are caught in a single organized re-entry loop firing very fast and steadily — and because it's one orderly loop (unlike AF's chaotic circuits), it produces the regular sawtooth baseline. The AV node can't keep up with that rate, so it lets through only every 2nd, 3rd, or 4th wave — giving a regular QRS rhythm at a clean fraction of the atrial rate.

- **Saddle (concave-up) ST elevation + PR depression** = **acute pericarditis** (inflammation of the pericardium)

  ![Acute pericarditis ECG — saddle ST elevation with PR depression](images/physiology/ecg-pericarditis.png)
  *Acute pericarditis — concave-up "saddle" ST elevation with PR-segment depression; P and QRS otherwise normal.*

- **Low-voltage QRS** + ⚡ **electrical alternans** (alternating QRS amplitudes) = **pericardial effusion**. Pericarditis can progress to effusion clinically, but the ECG fingerprints are distinct.

  ![Pericardial effusion ECG — low voltage with electrical alternans](images/physiology/ecg-pericardial-effusion.png)
  *Pericardial effusion — overall low-voltage QRS with beat-to-beat amplitude alternation (tall, short, tall, short).*

  **Why low voltage and alternans:** fluid in the pericardial sac dampens the electrical signal reaching the chest wall → low-voltage QRS (everything looks small). If the effusion is large enough, the heart literally swings back and forth within the fluid with each beat, alternately closer to and farther from the recording electrodes → electrical alternans, where QRS amplitude alternates beat-to-beat (tall, short, tall, short).

- 🔴 ⚡ **Chaotic, no identifiable QRS, no pulse** = **ventricular fibrillation (VF)** — cardiac arrest.

  ![Ventricular fibrillation ECG — chaotic waveform, no QRS, no pulse](images/physiology/ecg-vfib.png)
  *Ventricular fibrillation — completely chaotic baseline; no organized P, QRS, or T waves.*

  **Why VF = arrest:** ventricular fibrillation is the electrical equivalent of total chaos in the ventricles. Instead of one coordinated wave of depolarization sweeping through the ventricular muscle to produce a coordinated contraction, hundreds of tiny re-entry circuits fire simultaneously and independently across the ventricular myocardium. Different patches of muscle are depolarizing, repolarizing, and re-firing at different times, all out of sync with each other. The mechanical consequence: instead of contracting as a unit, the ventricles quiver. **No coordinated contraction = no cardiac output = no pulse = no perfusion. The patient is in cardiac arrest from the moment VF starts** → immediate CPR + defibrillation.

#### AV Blocks 🔴 ⚡

AV block means the AV node or infranodal conduction system is slowing or blocking the signal traveling from atria to ventricles. Severity is graded 1st → 3rd, with 2nd degree split into two subtypes that differ in prognosis.

**1st degree AV block — PR prolonged, every P conducts**

![1st degree AV block — long PR but every P followed by QRS](images/physiology/ecg-av-block-1.png)
*1st degree AV block — PR interval >200 ms (in humans) but every P wave is still followed by a QRS.*

**Why benign:** every signal makes it through the AV node, just slower than normal. Rhythm looks normal except for the long PR. Common in athletes (high vagal tone) and elderly patients; usually no treatment needed.

**2nd degree AV block, Mobitz I (Wenckebach) — progressive PR lengthening, then a dropped beat**

![2nd degree AV block Mobitz I — PR progressively lengthens until a P is not conducted](images/physiology/ecg-av-block-2-mobitz1.png)
*Mobitz I (Wenckebach) — PR gets longer with each beat until a P wave fails to conduct (no QRS follows), then the cycle resets with a short PR.*

**Why usually benign:** the block is in the AV node itself (above the bundle of His) and typically reflects vagal tone or AV nodal disease. Rarely progresses to complete block. Classic context: inferior MI (AV node is supplied by the right coronary artery).

**2nd degree AV block, Mobitz II — constant PR, random dropped beats**

![2nd degree AV block Mobitz II — constant PR, random non-conducted P waves](images/physiology/ecg-av-block-2-mobitz2.png)
*Mobitz II — PR interval is constant on conducted beats, but some P waves randomly fail to conduct with no preceding PR lengthening.*

**Why dangerous:** the block is below the AV node (His bundle or bundle branches). The diseased conduction system can fail completely without warning — Mobitz II often progresses abruptly to complete heart block. Pacemaker indicated.

**3rd degree (complete) AV block — atria and ventricles completely independent**

![3rd degree AV block — P waves and QRS complexes at independent rates](images/physiology/ecg-av-block-3.png)
*Complete AV block — P waves march at one rate (SA node driven), QRS complexes march at a slower escape rate; no consistent PR relationship.*

**Why critical:** no signals get through the AV junction. Atria continue at the SA rate; ventricles fire independently at whatever escape rhythm takes over. The escape rhythm decides patient stability:
- **Junctional escape** (from AV junction below the block): narrow QRS, rate 40–60. Relatively reliable.
- **Ventricular escape** (from ventricular muscle): wide QRS, rate 20–40. Unreliable — can stop at any moment → asystole.

Complete heart block is a pacemaker indication and often an emergency, especially with a ventricular escape rhythm or a symptomatic patient.

**Quick recognition checklist:**
1. Is every P followed by a QRS? Yes → normal or 1st degree (check the PR length).
2. Some Ps not followed by QRS? Is the PR before the drop getting longer each beat? Yes → Mobitz I. No (constant PR) → Mobitz II.
3. P waves and QRS complexes occurring at independent rates with no relationship? → 3rd degree.

#### Hyperkalemia ECG progression 🔴 ⚡

Order matters — NAVLE will give you a serum K⁺ value and ask which finding to expect, or vice versa. **Atrial myocardium is more K⁺-sensitive than ventricular**, which is why P waves disappear before QRS widens.

🟡 **Why this happens (mechanism — understand, don't memorize):**
High extracellular K⁺ **raises the resting membrane potential closer to threshold**, which keeps **Na⁺ channels stuck in their inactivated state** and **slows depolarization** across every cardiac cell type. Repolarization meanwhile happens **faster** (K⁺ efflux is enhanced when extracellular K⁺ rises) — **that's the tented T**. But depolarization is slower and weaker — that's why **P waves vanish first** (atrial cells are most sensitive), then **QRS widens** (ventricles slow too), then **everything blurs into a sine wave** as conduction nearly stops, and finally the cells **can't fire at all → asystole**.

**Stage 1 — Peaked ("tented") T waves** (K⁺ ~5.5–6.5 mEq/L)
T wave becomes **tall, narrow, symmetric, sharply pointed**. P waves still present, QRS still narrow. Earliest reliable ECG sign.

![Hyperkalemia stage 1 — peaked T wave](images/physiology/ecg-hyperk-peaked-t.png)
*Stage 1 — peaked / tented T. K⁺ ~5.5–6.5; P still present, QRS still narrow.*

**Stage 2 — Loss of P + PR prolongation** (K⁺ ~6.5–7.5)
Atrial conduction fails first → **P waves flatten and disappear** ("atrial standstill"); PR interval lengthens.

![Hyperkalemia stage 2 — loss of P, PR prolongation](images/physiology/ecg-hyperk-loss-p.png)
*Stage 2 — P waves gone, PR prolongs. K⁺ ~6.5–7.5.*

**Stage 3 — Wide / bizarre QRS** (K⁺ >7.5)
Ventricular conduction slows; **QRS widens and starts merging into the T wave**.

![Hyperkalemia stage 3 — wide QRS](images/physiology/ecg-hyperk-wide-qrs.png)
*Stage 3 — wide QRS merging into T. K⁺ >7.5.*

**Stage 4 — Sine wave** (K⁺ >8) — **pre-arrest**
QRS and T fuse into a **smooth, broad, symmetric sine wave**. ⚡ **VF or asystole within minutes without treatment.**

![Hyperkalemia stage 4 — sine wave pre-arrest](images/physiology/ecg-hyperk-sine-wave.png)
*Stage 4 — sine wave (terminal). K⁺ >8; VF/asystole imminent.*

**Stage 5 — VF / asystole** — terminal.

🔴 ⚡ **Treatment (memorize the order):**
1. **Calcium gluconate IV** — **cardioprotective** (raises threshold potential, restores excitability gradient); does NOT lower K⁺ — buys time
2. **Insulin + dextrose** — drives K⁺ into cells (fastest K⁺-lowering measure)
3. **β-agonists** (albuterol nebulizer) — drives K⁺ into cells
4. **Bicarbonate** — if patient is acidotic (alkalosis shifts K⁺ in)
5. **Fluids ± dialysis** — definitive K⁺ removal
6. **Treat underlying cause** — relieve urethral obstruction, treat Addisonian crisis, stop ACEi/spironolactone, etc.

🔴 ⚡ **Classic NAVLE scenario**: blocked male cat (FLUTD / urethral plug) → bradycardia, hyperK on chemistry, tented T waves on ECG → **Ca gluconate first, then insulin/dextrose, then relieve obstruction**.

### Normal Heart Rates by Species 🟡

| Species | Resting HR (bpm) | Notes |
|---|---|---|
| **Dog** | 60–160 | Large breed 60–100; small / toy 100–140; puppy up to ~180 |
| **Cat** | 140–220 | Stress / clinic visits typically push to upper end |
| **Horse** (adult) | 28–44 | Conditioned athletes lower; ⚡ HR >60 with colic is a poor prognostic sign |
| **Foal** (newborn) | 60–100 | Drops toward adult range over months |
| **Cow** (adult) | 48–84 | Calf 100–140 |
| **Sheep** | 60–120 | |
| **Goat** | 70–135 | |
| **Pig** (adult) | 60–100 | Piglet 200–250 |
| **Rabbit** | 130–325 | ⚡ Stress-prone; values often 200–250 in clinic |
| **Small bird** (budgie / cockatiel) | 250–600 | Smaller body = higher HR |

🔴 ⚡ **Bradycardia red flags by species**: dog HR <60, cat <140, horse <28 — investigate for pathology (vagal tone, hyperK⁺, drug effect, sick sinus, AV block).

### Pressure Values (Dog, approximate) 🟡
| Location | Systolic | Diastolic |
|---|---|---|
| Left ventricle | 120 mmHg | 5 mmHg |
| Aorta | 120 mmHg | 80 mmHg |
| Right ventricle | 25 mmHg | 5 mmHg |
| Pulmonary artery | 25 mmHg | 10 mmHg |
| Right atrium (CVP) | — | 0–5 mmHg |
| Left atrium | — | 8–12 mmHg |

### Blood Pressure Regulation 🔴
**Acute (seconds-minutes) — neural:**
- 🔴 **Baroreceptors** in carotid sinus (CN IX) + aortic arch (CN X) → medulla → vagal/sympathetic adjustments to HR, contractility, vasomotor tone
- ↓ BP → ↓ baroreceptor firing → ↑ sympathetic, ↓ vagal → ↑ HR, ↑ contractility, vasoconstriction

**Subacute (minutes-hours) — hormonal:**
- 🔴 ⚡ **RAAS pathway**:
  - **Renin** (JG cells of afferent arteriole) released in response to: ↓ BP, ↓ Na⁺ delivery to macula densa, ↑ sympathetic tone
  - Renin cleaves **angiotensinogen** (liver) → **angiotensin I**
  - **ACE** (lung endothelium) converts AT-I → **angiotensin II**
  - AT-II effects: vasoconstriction (efferent arteriole > afferent), aldosterone release, ADH release, thirst
  - **Aldosterone** (zona glomerulosa) → ↑ Na⁺ reabsorption, ↑ K⁺ secretion at collecting duct
  - 🔴 **Drug targets**: enalapril/benazepril (ACE inhibitors), telmisartan (ATII receptor blocker), spironolactone (aldosterone antagonist)
- 🔴 ⚡ **ANP / BNP — the heart's own "stop retaining fluid" signal:**
  - **Trigger:** atrial wall stretch releases **ANP** (from atria); ventricular wall stretch releases **BNP** (from ventricles). Both fire when the heart is overfilled or overworked.
  - **Effects — all the opposite of RAAS:**
    - **Natriuresis** — kidneys dump Na⁺ (water follows) → ↓ blood volume → ↓ preload → ↓ wall stretch (negative feedback closes the loop)
    - **Vasodilation** → ↓ TPR → ↓ afterload
    - **↓ renin, ↓ aldosterone, ↓ ADH** → directly blocks the volume-retention arm of RAAS
  - **NT-proBNP — the diagnostic test:** when BNP is released, its prohormone is cleaved into **active BNP** + an **inactive NT-proBNP** fragment. We measure NT-proBNP because it has a **longer half-life and is more stable in plasma**, so the value is easier to interpret.
  - 🔴 ⚡ **Clinical use — dyspneic cat (cardiac vs respiratory):** a stressed dyspneic cat can decompensate on the radiograph table, and chest rads in a panicking cat are hard to interpret. A point-of-care **NT-proBNP** test sorts it out without restraint:
    - **Elevated** → cardiac cause (CHF) → give furosemide
    - **Normal** → respiratory cause (asthma, non-cardiogenic pleural effusion) → don't dehydrate the cat with diuretics

**Long-term — renal:**
- Pressure natriuresis: ↑ BP → ↑ Na/H2O excretion → ↓ blood volume

### Microcirculation & Edema 🟡
🟡 **Starling forces**: net filtration = (Pc − Pi) − σ(πc − πi)
- Pc = capillary hydrostatic pressure; Pi = interstitial hydrostatic; πc = capillary oncotic; πi = interstitial oncotic

🔴 **Edema causes** (memorize):
- ↑ **Pc** = CHF (back pressure), portal hypertension (ascites)
- ↓ **πc** (hypoalbuminemia) = PLN (protein-losing nephropathy), PLE (protein-losing enteropathy), liver failure, severe malnutrition
- ↑ **permeability** = inflammation, sepsis, anaphylaxis, vasculitis
- **Lymphatic obstruction** = lymphedema, neoplasia, post-surgical, filariasis

---

## 2. Respiratory Physiology

### Mechanics of Breathing 🔴
- **Inspiration** (active): diaphragm + external intercostals contract → thorax expands → intrapleural pressure ↓ → air in
- **Expiration** (passive at rest, active in exercise): elastic recoil; abdominal + internal intercostals at exercise
- **Compliance** = ΔV/ΔP (lung distensibility) — ↓ in fibrosis, edema; ↑ in emphysema (loss of elastic tissue)
- **Resistance** = airway diameter — ⚡ ↑ in **feline asthma** (bronchospasm), tracheal collapse, COPD-equivalent ("heaves")
- 🔴 ⚡ **Surfactant** (DPPC) from **type II pneumocytes** — reduces alveolar surface tension; **deficient in premature foals/lambs → neonatal RDS**

### Lung Volumes & Capacities 🟡
- **Tidal volume (VT)** = breath at rest (~10 mL/kg)
- **Inspiratory reserve volume (IRV)** = additional inhalable
- **Expiratory reserve volume (ERV)** = additional exhalable
- **Residual volume (RV)** = remaining after max exhalation (cannot be measured by spirometry)
- **Vital capacity (VC)** = VT + IRV + ERV
- **Total lung capacity (TLC)** = VC + RV
- **Functional residual capacity (FRC)** = ERV + RV (volume at end of normal expiration)
- **Dead space (VD)** = anatomic (conducting airways, no gas exchange) + alveolar (V/Q mismatch zones)

### Gas Exchange 🔴

🔴 **Fick's law**: diffusion ∝ (area × ΔP) / thickness — surface area and partial-pressure gradient drive gas movement; barrier thickness opposes it.

#### 🔴 V/Q matching — what it is and why it matters

**V/Q is the ratio of alveolar ventilation (V) to pulmonary perfusion (Q)** — air reaching the gas-exchange surface, divided by blood flowing past it. The ideal value is **~1.0**: every bit of inspired air meets the right amount of blood, and gas exchange runs at maximum efficiency.

**Why there's a gradient down the lung — gravity.**
In a standing animal, **both ventilation and perfusion are higher at the base than at the apex** — but **perfusion changes much more steeply than ventilation does**. Blood is heavy: gravity pulls it strongly downward. Ventilation also favors the base (dependent alveoli sit on a steeper part of the compliance curve and expand more per breath), but the gradient is milder.

The result is a regional V/Q gradient:

![V/Q distribution from apex to base of the lung](/images/physiology/vq-distribution.png)

*Regional V/Q gradient in a standing lung. Apex: relatively more air than blood (V/Q ≈ 3.3 — wasted ventilation). Middle: matched (V/Q ≈ 1.0 — ideal). Base: more blood than air (V/Q ≈ 0.6 — wasted perfusion).*

| Region | Ventilation | Perfusion | V/Q | Functional consequence |
|---|---|---|---|---|
| **Apex** | moderate | low | **high (~3.0+)** | "Wasted ventilation" — air without blood to oxygenate |
| **Middle** | moderate | moderate | **~1.0** | Ideal matching — most efficient gas exchange |
| **Base** | high | very high | **low (~0.6)** | "Wasted perfusion" — blood passes by under-ventilated alveoli |

🔴 ⚡ **V/Q mismatch is the most common cause of hypoxemia in clinical disease** (pneumonia, atelectasis, pulmonary edema, COPD/asthma — any condition that pulls ventilation and perfusion out of sync).

**The critical insight: high-V/Q regions cannot rescue low-V/Q regions.**

The reason lies in the **shape of the oxygen-hemoglobin dissociation curve** (covered in detail next section). At normal V/Q, hemoglobin leaving the alveolus is already ~98 % saturated — it sits on the **flat top** of the sigmoid curve. Sending *more* air to a region (high V/Q) cannot meaningfully boost saturation any further: you can't load extra O₂ onto already-full hemoglobin. But sending *less* air (low V/Q) drops local PO₂ onto the **steep middle part** of the curve, where saturation falls off a cliff.

![Oxyhemoglobin dissociation curve](/images/physiology/oxyhemoglobin-curve.png)

*Sigmoid Hb saturation curve. Normal arterial PO₂ 100 mmHg → 98 % saturated (flat top — no headroom for further loading). Mixed venous PO₂ 40 mmHg → ~75 %. P50 (50 % saturation) ≈ 27 mmHg in dog. The flat top is why high-V/Q regions can't compensate for low-V/Q ones.*

So when blood from all lung regions mixes in the pulmonary veins, well-saturated blood from high-V/Q areas **cannot rescue** the desaturated blood returning from low-V/Q areas. Arterial PaO₂ drops below normal — that's hypoxemia.

🔴 ⚡ **Compensation mechanism — Hypoxic Pulmonary Vasoconstriction (HPV)**: when alveolar PO₂ falls in a region (low V/Q), local pulmonary arterioles constrict → diverting blood toward better-ventilated alveoli. Unique to pulmonary circulation (systemic arterioles dilate to hypoxia). HPV is why generalized hypoxia (high altitude, severe pulmonary disease) → diffuse pulmonary vasoconstriction → **pulmonary hypertension** → right heart strain (cor pulmonale).

🔴 ⚡ **V/Q mismatch vs true shunt vs diffusion impairment** — distinguishing test = **response to 100 % O₂**:
- **V/Q mismatch** → PaO₂ rises substantially with 100 % O₂ (under-ventilated alveoli now receive O₂-enriched gas)
- **Diffusion impairment** → PaO₂ rises with 100 % O₂ (higher driving pressure overcomes the thickened barrier)
- **True shunt** → PaO₂ does NOT correct (blood bypasses alveoli entirely — no gas to enrich)
#### 🔴 Shunt physiology
- **Anatomic shunt** = blood bypasses the lung entirely (reversed PDA, R→L VSD with Eisenmenger, intracardiac defects)
- **Physiologic shunt** = blood perfuses unventilated alveoli (atelectasis, consolidation, pneumonia)
- ⚡ Reminder from above: a **true shunt does NOT correct with 100 % O₂** — the defining feature that separates shunt from V/Q mismatch and diffusion impairment

### Oxyhemoglobin Dissociation Curve 🔴

The sigmoid curve relating Hb saturation (SaO₂) to PaO₂ — the centerpiece of oxygen delivery physiology.

**Why sigmoid? Cooperative binding.**
Hemoglobin has 4 heme subunits. The first O₂ binds with low affinity (**T = "tense" state**), but binding triggers a conformational shift to **R = "relaxed" state**, which dramatically increases affinity for the next three. The sigmoid *is* the cooperativity. Anything that **stabilizes the T state shifts the curve right** (lower affinity → releases O₂); anything that **stabilizes the R state shifts it left** (higher affinity → holds onto O₂).

🟡 **P50** (PaO₂ at which Hb is 50 % saturated) **≈ 27 mmHg in dog** — the standard reference point; right shift = higher P50, left shift = lower.

#### 🔴 ⚡ Right shift — "tissue is working hard, release O₂"

Every right-shift factor is a **marker of active metabolism**: the body's natural signal that a region needs O₂ unloaded *now*. The mechanism is always the same — stabilize the T state, favor release.

| Factor | Why it shifts right (mechanism) |
|---|---|
| ↑ **CO₂** + ↑ **H⁺** (**Bohr effect**) | Working tissues burn fuel and produce CO₂ → CO₂ dissolves to H⁺ in solution. H⁺ binds Hb and stabilizes the T state → O₂ is released right where it's being consumed. |
| ↑ **Temperature** | Working muscle and febrile tissue are warm. Heat directly weakens the Hb–O₂ bond (binding is exothermic — heat opposes it, by Le Chatelier). |
| ↑ **2,3-DPG** | The **chronic-hypoxia lever**. RBCs synthesize more 2,3-DPG over days–weeks when O₂ has been scarce (high altitude, chronic anemia, chronic heart/lung disease). DPG sits in the central cavity between the β chains and locks Hb into the T state — so the limited O₂ that does load gets unloaded more easily at tissues. |

🔴 All four signals point the same way: hot, acidic, CO₂-loaded, or chronically hypoxic ⇒ release O₂.

#### 🔴 ⚡ Left shift — "hold on tight"

The mirror image. Either physiologic situations where releasing O₂ would be inappropriate, **or pathologic states that lock Hb shut**.

| Factor | Why it shifts left (mechanism) |
|---|---|
| **Fetal hemoglobin (HbF)** | The fetus must pull O₂ out of maternal blood across the placenta, so it needs **higher** affinity than mom. Mechanism: HbF's γ chains barely bind 2,3-DPG → the affinity-lowering DPG effect is absent → fetal curve sits left of adult. |
| ↓ **Temperature** | Cold tissue isn't metabolizing — no urgency to release. Direct mirror of the heat effect. |
| **Alkalosis** (↓ H⁺) | Mirror of the Bohr effect. Less H⁺ → R state stabilized → Hb holds tight. |
| ⚡ **Carbon monoxide (CO)** | **Pathologic.** CO binds Hb ~240× more tightly than O₂. Worse: when CO occupies one heme site, it forces the **other three into the R state** — so even already-bound O₂ refuses to release at tissues. ⚡ CO also **flattens the curve** — the sigmoid shape depends on cooperative T↔R transitions, and CO disables that machinery. |
| **Methemoglobinemia** | Different mechanism, same result. Iron in heme oxidizes Fe²⁺ → **Fe³⁺**, which cannot bind O₂ at all. The non-functional Fe³⁺ subunits then lock the remaining Fe²⁺ subunits into the high-affinity R state, so the still-functional Hb won't release its O₂ either. |

🔴 ⚡ **The one-sentence version**: *Right shift says "I'm in a needy tissue, here's your oxygen." Left shift says "Not yet — hold on."* The body uses pH, CO₂, temperature, and 2,3-DPG as natural signals; **CO and metHb hijack the same machinery pathologically**.

#### 🔴 Clinical pearls (NAVLE classics)
- ⚡ **Cherry-red mucous membranes + low SpO₂ + normal PaO₂** → **CO toxicity**. Pulse oximetry can't distinguish HbO₂ from HbCO — confirm with **co-oximetry** (carboxyhemoglobin level).
- ⚡ **Chocolate-brown blood + cyanosis unresponsive to O₂** → **methemoglobinemia**. Treat with **methylene blue 1–2 mg/kg IV slow**, ⚡ **but generally avoided in cats** (oxidant — can worsen Heinz body formation); use **N-acetylcysteine (NAC)** in cats instead.
- ⚡ **Acetaminophen toxicity in cats** → metHb + **Heinz body anemia** (cats are deficient in glucuronyl transferase → can't conjugate paracetamol → NAPQI accumulates → oxidative damage to Hb). Treat with NAC ± ascorbate.

![Heinz bodies in feline RBCs](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Heinz_bodies_cat.jpg/500px-Heinz_bodies_cat.jpg)

*Heinz bodies in feline erythrocytes — pale, eccentric inclusions of denatured/oxidized Hb projecting from the RBC margin. Best visualized with new methylene blue (NMB) supravital stain. (Wikimedia Commons, public domain.)*
- ⚡ **Stored / banked blood loses 2,3-DPG** → left-shifted Hb post-transfusion → temporarily impaired O₂ delivery; DPG regenerates over ~24 h.

### CO₂ Transport 🟡
- ~70% as **bicarbonate** (RBC carbonic anhydrase converts CO₂ + H₂O → HCO₃⁻ + H⁺; **chloride shift** moves HCO₃⁻ out of RBC for Cl⁻)
- ~23% as **carbamino compounds** bound to Hb (Hb-NH-COO⁻)
- ~7% **dissolved**

### Control of Breathing 🔴
- 🔴 **Central chemoreceptors** (medulla) — sense **CSF pH/pCO₂** (most sensitive driver in normal physiology)
- 🔴 **Peripheral chemoreceptors** (carotid body — CN IX, aortic body — CN X) — sense **PaO₂ <60 mmHg** (kicks in with severe hypoxia); also pH, pCO₂
- 🟡 **Hering-Breuer reflex**: stretch receptors in airways → inhibit further inspiration (limits over-inflation)
- 🟢 Sleep, opioids, anesthesia depress central response → hypoventilation

### Normal Respiratory Rates by Species 🟡

| Species | Resting RR (breaths/min) | Notes |
|---|---|---|
| **Dog** | 10–30 | ⚡ **Sleeping resp rate (SRR) <30** — used by owners to monitor for CHF onset at home |
| **Cat** | 20–30 | ⚡ **Sleeping <30** — same CHF screening principle |
| **Horse** (adult) | 8–16 | ⚡ Dyspnea / nostril flaring / abdominal effort = serious in horse |
| **Foal** (newborn) | 30–60 | Drops toward adult by weeks |
| **Cow** (adult) | 20–40 | Heat stress / pneumonia push higher |
| **Calf** | 30–60 | |
| **Sheep / Goat** | 12–25 | |
| **Pig** | 10–30 | |
| **Rabbit** | 30–60 | ⚡ Open-mouth breathing = emergency (rabbits are obligate nasal breathers) |
| **Small bird** | 60–80 | Larger species lower (chicken ~12–37) |

🔴 ⚡ **Tachypnea is more sensitive than dyspnea** for early respiratory disease — track resting RR over time. In cats / dogs with cardiac history, **>40 sustained while sleeping** = CHF until proven otherwise.

### Species-Specific Respiratory 🔴
- 🔴 ⚡ **Horse = obligate nasal breather** (long soft palate); cannot mouth-breathe; epiglottis sits dorsal to soft palate normally
- 🔴 ⚡ **Horse = expiratory-driven at exercise** → "**heave line**" (hypertrophy of external abdominal oblique) in **severe equine asthma (RAO/heaves)**
- 🟡 **Cat** — laryngospasm with intubation (use **lidocaine spray** on arytenoids); reactive small airways (asthma — bronchodilator + steroid)
- 🟡 **Bird** — air sac system (cranial + caudal); no diaphragm; **unidirectional through-flow ventilation** through parabronchi; ⚡ **crosscurrent gas exchange** — blood capillaries run **perpendicular** to the unidirectional air flow (vs **countercurrent in fish gills**, vs uniform-pool tidal system in mammals); less efficient than fish countercurrent but lets birds extract O₂ at altitudes that would knock out a mammal (bar-headed geese over the Himalayas); ⚡ **highly sensitive to inhaled toxins** (PTFE/Teflon overheating fatal in seconds)
- 🟡 **Cattle** — fewer alveolar macrophages + tight lobulation → **pneumonia spreads quickly (BRD susceptibility)**

---

## 3. Renal Physiology

### GFR (Glomerular Filtration Rate) 🔴
- Driven by **net filtration pressure**: GFR = Kf × [(Pgc − Pbc) − (πgc − πbc)]
  - Pgc = glomerular capillary hydrostatic (favors filtration)
  - Pbc = Bowman's capsule hydrostatic
  - πgc = glomerular capillary oncotic (opposes filtration)
- Estimated by **creatinine clearance** or **SDMA** (more sensitive — detects ~25% loss vs 75% for creatinine)
- 🔴 **Autoregulation** keeps GFR constant across MAP 80–180 mmHg via:
  - **Myogenic mechanism** (afferent arteriole stretch → constriction)
  - **Tubuloglomerular feedback** (macula densa senses Na/Cl delivery → adenosine → afferent constriction)

  *Why this works:* The kidney filters plasma based on glomerular pressure, but systemic blood pressure swings constantly (exercise, posture, stress, sleep). If GFR tracked MAP directly, filtrate volume would fluctuate wildly and renal output would be unstable. So the kidney holds GFR steady by adjusting the **afferent arteriole** — the inflow vessel to the glomerulus — constricting it when MAP rises and dilating it when MAP falls. Two mechanisms do this on different timescales:

  1. **Myogenic response (seconds, automatic).** Higher MAP physically stretches the afferent arteriole wall. Stretch-sensitive ion channels in vascular smooth muscle open → depolarization → Ca²⁺ entry → muscle contracts → vasoconstriction. Lower MAP → less stretch → relaxation → vasodilation. Pure reflex, no signaling required.

  2. **Tubuloglomerular feedback (slower, smarter).** Each nephron's distal tubule loops back and physically touches its own afferent arteriole at the **macula densa**, a patch of specialized cells that sample NaCl concentration in tubular fluid. The logic: high MAP → high GFR → more NaCl delivered to the macula densa → it releases **adenosine** (and ATP) → afferent arteriole constricts → glomerular pressure drops → GFR returns to normal. Low MAP triggers the opposite: low NaCl delivery → macula densa stimulates **renin release** from adjacent granular cells → RAAS activates to restore pressure.
- 🔴 **Angiotensin II constricts efferent > afferent** → maintains GFR when systemic BP low
- 🔴 ⚡ **NSAIDs vasoconstrict afferent arteriole** (block prostaglandin vasodilation) → **AKI in volume-contracted patients** (dehydration + NSAID = high risk)
- 🔴 ⚡ **ACE inhibitors dilate efferent arteriole** → ↓ GFR if RAS-dependent (e.g., bilateral renal artery stenosis, severe CHF on diuretics) — monitor creatinine

### Nephron Function by Segment 🔴
| Segment | Function | Drug targets |
|---|---|---|
| 🔴 **PCT** | **Bulk reabsorption** (~67%): Na⁺, glucose (SGLT2), amino acids, HCO₃⁻ (Na⁺/H⁺ antiporter), K⁺, water (passive); secretes H⁺, organic acids (penicillin) | SGLT2 inhibitors (Bexacat for cat DM), acetazolamide (carbonic anhydrase inhibitor) |
| 🔴 **Loop of Henle (descending)** | Water reabsorption (permeable to H₂O, impermeable to Na) | — |
| 🔴 **Loop of Henle (thick ascending)** | **Na⁺/K⁺/2Cl⁻ cotransporter (NKCC2)** — impermeable to water; builds medullary gradient | **Furosemide** (loop diuretic) |
| 🔴 **DCT** | Na⁺/Cl⁻ cotransport (aldosterone-influenced); Ca²⁺ reabsorption (PTH-driven) | **Thiazides** |
| 🔴 **Collecting duct** | **Principal cells**: ADH → aquaporin-2 insertion (water); aldosterone → ENaC (Na in, K out); **Intercalated cells**: H⁺ secretion (acid-base) | **Spironolactone** (aldosterone antagonist), **amiloride** (ENaC blocker) |

### Concentration & Dilution 🔴
- 🔴 **Medullary gradient** (up to 1200 mOsm in dog, 3000 mOsm in cat — cats can produce extremely concentrated urine!) built by:
  - Loop of Henle countercurrent multiplier (NKCC2 in TAL)
  - Urea recycling (collecting duct → medullary interstitium)
  - Vasa recta = countercurrent **exchanger** (preserves gradient)
- 🔴 ⚡ **Loss of medullary gradient → inability to concentrate urine** — causes:
  - **Chronic medullary washout** (psychogenic polydipsia)
  - **Addisonian** (low aldosterone — Na wasting)
  - **Hypercalcemia** (interferes with ADH action — Ca²⁺ ↓ aquaporin insertion)
  - **Severe protein malnutrition** (low urea)
  - CKD (loss of nephrons + gradient)

### Acid-Base Renal Handling 🔴
- 🔴 **PCT reabsorbs filtered HCO₃⁻** via Na⁺/H⁺ antiporter + carbonic anhydrase (cytosolic + brush border)
- 🔴 **Collecting duct intercalated cells**:
  - **α-intercalated**: secrete H⁺ (H⁺-ATPase) + reabsorb HCO₃⁻ (kidney's main acid-disposal mechanism)
  - **β-intercalated**: secrete HCO₃⁻ (in alkalosis)
- 🔴 **Titratable acid + ammonia (NH₄⁺)** = forms in which H⁺ is excreted
- 🟡 Renal compensation for acid-base disorders takes **24-48h** (slow vs respiratory minutes)

### K⁺ Handling 🔴
- Filtered freely; reabsorbed in PCT/loop; **net SECRETION at collecting duct** (principal cells), aldosterone-driven
- 🔴 **Transcellular K⁺ shifts**:
  - K⁺ INTO cells: **insulin** (glucose + insulin treatment for hyperK), **β-agonists** (albuterol nebulizer), **alkalosis**
  - K⁺ OUT of cells: **acidosis** (H⁺/K⁺ exchange), insulin deficiency, cell lysis (rhabdomyolysis), reperfusion injury
- 🔴 ⚡ **Cat with urethral obstruction → hyperkalemia → bradycardia + ECG changes** → emergency: Ca gluconate (cardioprotective), insulin/dextrose, fluids ± dialysis. *Full ECG progression and treatment order in §1 ECG Interpretation → Hyperkalemia ECG progression.*

### Renal Thresholds 🔴
- 🔴 **Glucose**: ~10 mmol/L (~180 mg/dL) dog/cat; **~280 mg/dL horse**; SGLT2 saturation → glycosuria above this — **diabetes mellitus, stress hyperglycemia (cats — 350+ if very stressed)**
- 🟡 **Protein**: trace amounts normal; persistent proteinuria = pathologic (UPC ratio for quantification)

---

## 4. Gastrointestinal Physiology

### Motility 🔴
- 🔴 **Segmentation** = mixing (back-and-forth, no net propulsion)
- 🔴 **Peristalsis** = propulsion (sequential contractions)
- 🟡 **MMC (migrating motor complex)** = "housekeeper" sweep during interdigestive period; cleans stomach/SI of debris
- 🟡 **Gastrocolic reflex** = food in stomach → ↑ colonic motility (defecation after meal)
- 🟡 Vomiting center: medulla; **CRTZ (chemoreceptor trigger zone)** lacks blood-brain barrier — drug-induced emesis (apomorphine in dogs, dexmedetomidine in cats)

### Secretion 🔴
- 🔴 **Saliva**: 
  - Amylase present in **dog, pig, primates**; **ABSENT in cat, horse, ruminant**
  - 🔴 **Cattle saliva is enormous (~150 L/d)** — high in **bicarbonate** to buffer rumen
- 🔴 **Gastric acid** (parietal cells): **H⁺/K⁺ ATPase (proton pump)** — target of **omeprazole, pantoprazole**
  - Stimulated by: **gastrin** (G cells of antrum, post-prandial), **histamine** (ECL → H₂R, target of **famotidine, ranitidine**), **ACh** (vagal)
- 🔴 **Pepsinogen** (chief cells) → activated by acid → **pepsin** (protein digestion)
- 🔴 **Intrinsic factor** = required for **B12 absorption in ileum**; 
  - In **dog**, both stomach AND **pancreas** produce IF → ⚡ **EPI dogs have low cobalamin** even with stomach intact
  - In cat, only pancreas → cobalamin deficiency common in feline GI disease
- 🔴 **Pancreatic exocrine**:
  - Enzymes: **trypsinogen → trypsin (activated by enterokinase in duodenum)**, chymotrypsin, lipase, amylase, elastase, phospholipase
  - Bicarbonate (ductal cells) — neutralizes gastric chyme
  - Stimulated by **CCK** (fat/protein in duodenum) and **secretin** (acid in duodenum)
- 🔴 **Bile**: bile acids (emulsify fats), conjugated bilirubin, cholesterol, phospholipids
  - Stored in gallbladder (absent in horse, deer, rat); contracted by CCK

### Digestion & Absorption 🔴
- 🔴 **Carbohydrates**: salivary/pancreatic amylase → disaccharides → brush border disaccharidases (lactase, sucrase, maltase) → monosaccharides → **SGLT1** (Na-coupled, glucose/galactose) and GLUT5 (fructose) → portal blood
- 🔴 **Protein**: pepsin → pancreatic proteases → small peptides + AAs → Na-coupled AA transporters and PEPT1 (di/tripeptide)
- 🔴 **Lipids**: bile emulsification → pancreatic lipase → free FAs + monoglycerides → micelles → absorbed by enterocyte → reassembled into TGs → **chylomicrons → lymphatics (lacteals) → thoracic duct → blood**
  - 🔴 ⚡ **Chyle = high-triglyceride lymph; chylothorax = milky pleural fluid**
- 🔴 **Fat-soluble vitamins (A/D/E/K)** — absorbed with fat; **deficient in cholestasis, EPI, ileal disease**
- 🔴 **B12** — IF-bound, absorbed in **ileum**; 
  - 🔴 ⚡ **Cobalt-dependent rumen microbial synthesis in ruminants** — Co deficiency = "**ill-thrift**" in lambs/calves on Co-deficient pastures (e.g., parts of Atlantic Canada, Scotland)
- 🟡 **Bile acid enterohepatic circulation**: bile acids reabsorbed in ileum → portal vein → liver → resecreted; broken by ileal disease, bile acid sequestrants

### Ruminant Fermentation 🔴
- 🔴 **VFAs (volatile fatty acids)** produced by microbial fermentation:
  - **Acetate (~60%)**: lipid synthesis (mammary fat, body fat); **NOT a glucose precursor**
  - 🔴 ⚡ **Propionate (~20%)**: **MAIN GLUCONEOGENIC PRECURSOR** in ruminants — propionate → succinyl CoA → glucose
  - **Butyrate (~15%)**: **rumen epithelium energy source** (most absorbed VFA does not reach circulation)
- 🔴 Ruminants are essentially "glucose-deficient" — most carbs fermented to VFAs; minimal glucose absorbed; **gluconeogenesis from propionate is critical**
- 🔴 **Acetate:Propionate ratio** changes with diet:
  - High-forage = ~3:1 (more acetate → milk fat)
  - High-grain = ~1:1 or lower (more propionate → milk yield, but milk fat depression)
- 🔴 Rumen pH normally **6.0–7.0**

### Ruminant Disorders 🔴
- 🔴 ⚡ **Bloat**:
  - **Frothy bloat**: stable foam from legume saponins (alfalfa, clover) — fine particle forage; tx **poloxalene (anti-foaming)**
  - **Free-gas bloat**: esophageal obstruction (potato), vagal indigestion → can pass tube, decompress
- 🔴 ⚡ **Rumen acidosis**:
  - **Acute** (grain overload): **Strep bovis** lactate-producing takeover → ↓ pH <5.5 → systemic acidosis, dehydration, laminitis, death
  - **SARA (subacute)**: chronic ↓ pH 5.5–6.0 → reduced fiber digestion, milk fat depression, laminitis, abomasal displacement
- 🔴 **Hardware disease (TRP)**: ingested wire/nail penetrates reticulum → peritonitis → may pierce diaphragm → pericarditis ("traumatic pericarditis"); magnet prevention

### Liver Functions 🔴
🔴 **6 major functions** (all testable):
1. **Protein synthesis**: albumin (low in liver failure), clotting factors **EXCEPT factor VIII** (factor VIII made by endothelium — preserved in liver disease); **pre-albumin half-life ~2d** (early indicator)
2. **Detoxification**: Phase I (CYP450 oxidation) + Phase II (conjugation — glucuronidation, sulfation, glycine, glutathione)
3. **Bile production** (continuous; stored in gallbladder — absent in horse/rat)
4. **Glucose homeostasis**: storage (glycogenesis), release (glycogenolysis), gluconeogenesis (from lactate, glycerol, AAs, propionate in ruminants)
5. **Urea cycle**: ammonia (from protein catabolism, gut bacteria) → urea for renal excretion; ⚡ **liver failure → hyperammonemia → hepatic encephalopathy**
6. **Vitamin storage**: A, D, E, K, B12

🔴 **Species differences**:
- ⚡ **Cats deficient in glucuronidation (UGT enzymes)** — slow conjugation of acetaminophen, aspirin → toxicity; minimum recommended interval for aspirin in cats = 48-72h
- ⚡ **Cats lack arginine synthesis** — dietary essential (deficiency → hyperammonemia within hours)
- ⚡ **Dogs are slow acetylators** — sulfonamide hypersensitivity (KCS, IMPA, hepatotoxicity)

---

## 5. Endocrine Physiology

### Hypothalamic-Pituitary-Target Axes 🔴
| Hypothalamus → | Anterior pituitary → | Target → | Effect |
|---|---|---|---|
| **TRH** | **TSH** | Thyroid → T4/T3 | Metabolism |
| **CRH** | **ACTH** | Adrenal cortex → cortisol | Stress, gluconeogenesis |
| **GHRH** (stim) / **somatostatin** (inhib) | **GH** | Liver → IGF-1 | Growth, anabolism |
| **GnRH** | **LH, FSH** | Gonads → sex steroids | Reproduction |
| **Dopamine** (INHIBITS) | **Prolactin** (released when dopamine ↓) | Mammary gland | Lactation, maternal behavior |

🟡 ⚡ **Dopamine antagonists (e.g., metoclopramide, domperidone) → galactorrhea / pseudopregnancy** because they remove dopamine inhibition of prolactin

### Posterior Pituitary 🔴
Neural tissue (neurohypophysis) — **stores** hormones but does NOT synthesize them. Peptides are made in hypothalamic nuclei, packaged with **neurophysins**, transported down axons of the **hypothalamo-hypophyseal tract**, and released into capillaries on demand.

- 🔴 **ADH (vasopressin)** — synthesized mainly in **supraoptic nucleus**
  - **Stimuli**: ↑ plasma osmolality (hypothalamic osmoreceptors — primary) or ↓ blood volume/pressure (atrial + carotid baroreceptors — secondary)
  - **V2 receptor** (collecting duct principal cells): Gs → ↑ cAMP → PKA → insertion of **aquaporin-2** into apical membrane → water reabsorption → concentrated urine
  - **V1 receptor** (vascular smooth muscle): Gq → IP3/DAG → ↑ Ca²⁺ → vasoconstriction
  - 🟡 ⚡ **Dysfunction**: **SIADH** (excess → dilutional hyponatremia); **Diabetes insipidus** — *central* (no ADH produced — head trauma, tumor) vs *nephrogenic* (V2/AQP2 unresponsive — hypercalcemia, hypokalemia, drugs); diagnose with water deprivation + desmopressin (DDAVP) trial

- 🔴 **Oxytocin** — synthesized mainly in **paraventricular nucleus**
  - **Parturition (Ferguson reflex)**: cervical/vaginal stretch → afferents → hypothalamus → oxytocin release → uterine myometrium Gq receptors → IP3/DAG → Ca²⁺-mediated smooth muscle contraction → more stretch → **positive feedback** loop until delivery
  - **Milk letdown reflex**: suckling → mechanoreceptor afferents → PVN → oxytocin → contraction of **myoepithelial cells** around mammary alveoli → milk ejection (distinct from prolactin-driven milk *production*)
  - 🟡 ⚡ **Clinical**: synthetic oxytocin used to augment uterine contractions (dystocia — but only after confirming patent birth canal & alive fetus); also stimulates milk letdown in agalactic dams

### Thyroid 🔴
- 🔴 **T4** (thyroxine) is the main secreted hormone; **peripherally converted to active T3** by **5'-deiodinase** in liver/kidney
- Negative feedback: T4 → ↓ TRH/TSH
- 🔴 Synthesis requires **iodine** (deficiency → goiter)
- 🔴 ⚡ **Feline hyperthyroidism**: #1 endocrinopathy in older cats; benign adenomatous hyperplasia; methimazole (blocks TPO), I-131 (curative), thyroidectomy
- 🔴 ⚡ **Canine hypothyroidism**: lymphocytic thyroiditis (autoimmune) → ↓ T4; weight gain, lethargy, dermatologic changes; **levothyroxine 0.02 mg/kg PO BID**

### Adrenal Cortex 🔴
- **GFR mnemonic** (outer to inner): **G**lomerulosa, **F**asciculata, **R**eticularis → makes **s**alt, **s**ugar, **s**ex
- 🔴 **Aldosterone** (zona glomerulosa) — controlled by RAAS (NOT ACTH significantly); Na⁺ retention, K⁺ excretion
- 🔴 **Cortisol** (zona fasciculata) — controlled by ACTH; gluconeogenesis, anti-inflammatory, stress; diurnal rhythm in dogs subtle (vs strong in humans)
- **Sex steroids** (zona reticularis) — minor; some androgens (DHEA)

### Adrenal Medulla 🟡
- Catecholamines (epinephrine 80%, NE 20%) from chromaffin cells; activated in fight-flight
- Pheochromocytoma = tumor → episodic hypertension, paroxysmal collapse

### Pancreas Endocrine 🔴
- 🔴 **Insulin** (β cells, ~70% of islet) — anabolic; **GLUT4 translocation in muscle/fat** (not brain, RBC, liver — those are insulin-independent for glucose); ↓ blood glucose
- 🔴 **Glucagon** (α cells, ~20%) — gluconeogenesis, glycogenolysis; ↑ blood glucose; counter-regulatory
- 🟡 **Somatostatin** (δ cells) — inhibits insulin AND glucagon AND many GI hormones
- 🟡 **Pancreatic polypeptide** (F/PP cells) — modulates pancreatic exocrine secretion

### Calcium Regulation 🔴
🔴 **Three hormones, three target organs (bone, kidney, gut)**:

| Hormone | Source | Effect on Ca²⁺ | Effect on PO₄ |
|---|---|---|---|
| 🔴 **PTH** | Chief cells, parathyroid | ↑ (bone resorption, ↑ renal reabsorption, ↑ calcitriol) | **↓** (renal phosphaturia) |
| 🔴 **Calcitriol (active vitamin D = 1,25-(OH)₂D)** | Kidney 1α-hydroxylation | ↑ (mainly **GI absorption**) | ↑ (GI absorption) |
| 🟡 **Calcitonin** | C cells (parafollicular) | ↓ (minor in adult mammals) | ↓ |

🟡 **Calcitonin detail**: C cells **scattered between thyroid follicles**; released in response to **hypercalcemia** (the opposite of PTH). Inhibits **osteoclasts** rapidly (they retract their ruffled border within minutes) → ↓ bone resorption → ↓ blood Ca²⁺ and ↓ phosphate.

🔴 **Vitamin D pathway**:
1. **7-dehydrocholesterol** (skin) + UV → **cholecalciferol (D3)** OR diet (ergocalciferol D2)
2. **25-hydroxylation in liver** → 25-OH D (storage form, measured for status)
3. **1α-hydroxylation in kidney** → **calcitriol (1,25-(OH)₂D)** — active form; stimulated by ↑ PTH, ↓ PO₄

⚡ **Cats and most carnivores cannot synthesize vitamin D from skin** — must obtain dietary

🔴 ⚡ **Hypercalcemia differentials (HARD IONS or GOSH DARN IT)**:
- **G**ranulomatous (blastomycosis, histo)
- **O**steolytic (multiple myeloma, lytic mets)
- **S**purious (lipemia, hemolysis)
- **H**yperparathyroidism (primary)
- **D**estructive bone (Paget's, etc)
- **A**ddison's
- **R**enal (tertiary HPT in CKD)
- **N**eoplasia (#1 cause in dogs):
  - 🔴 ⚡ **Lymphoma** (most common — PTHrP)
  - 🔴 ⚡ **Anal sac adenocarcinoma** (PTHrP)
  - **Multiple myeloma** (osteolysis + cytokines)
- **I**diopathic (cats — common cause of mild hyperCa)
- **T**oxicosis: cholecalciferol rodenticides, calcipotriene (psoriasis cream), grape ingestion

### Growth Hormone 🟡
- ↑ during sleep, exercise, hypoglycemia; pulsatile secretion
- Acts via IGF-1 (liver) → growth, anabolism
- 🔴 ⚡ **Acromegaly in cats**: pituitary adenoma → ↑ GH → **insulin resistance (refractory diabetes)**, prognathia, organomegaly, broad facial features, polydactyly; suspect in cat with DM requiring >2 U/kg insulin

---

## 6. Nervous System Physiology

### ANS Wiring Overview 🔴

![Autonomic nervous system two-neuron chain — somatic motor uses one long neuron from CNS to skeletal muscle (ACh → nicotinic NMJ); parasympathetic has a long preganglionic and short postganglionic with the ganglion near the target organ (ACh nicotinic at ganglion → ACh muscarinic at target); sympathetic has a short preganglionic and long postganglionic with the ganglion near the spinal cord (ACh nicotinic at ganglion → NE on α/β receptors at target)](images/physiology/ans-two-neuron-chain.png)

### Synaptic Transmission & Neurotransmitters 🔴

#### Peripheral nervous system — autonomic + NMJ

🔴 **Acetylcholine (ACh)**
- **Where**: every ganglion (sympathetic + parasympathetic), the NMJ, and parasympathetic target organs
- **Receptors**:
  - **Nicotinic** — at ganglia + NMJ (depolarizing)
  - **Muscarinic** (M1–M5) — at parasympathetic targets
- ⚡ **Drug hook**: **atropine** blocks muscarinic → reverses parasympathetic (↑ HR, dries secretions, dilates pupils)

🔴 **Norepinephrine (NE)**
- **Where**: postganglionic sympathetic neurons → target organs
- **Receptors**:
  - **α1** — vasoconstriction
  - **α2** — presynaptic inhibition, sedation (dexmedetomidine)
  - **β1** — ↑ heart rate + contractility
  - **β2** — bronchodilation, vasodilation

#### CNS — main excitatory / inhibitory pair

🔴 **Glutamate**
- **Main excitatory NT**
- **Receptor**: NMDA
- ⚡ **Drug hook**: **ketamine = NMDA antagonist** (dissociative anesthesia)

🔴 **GABA**
- **Main inhibitory NT (CNS)**
- **Potentiated by**: benzodiazepines, propofol, isoflurane, **ivermectin (toxic in MDR1 collies)**

🟡 **Glycine**
- **Inhibitory NT in spinal cord + brainstem** — specifically inhibits **LMNs** (via Renshaw cells and other inhibitory interneurons) to keep motor output in check
- ⚡ **Drug hook**: **tetanus toxin blocks glycine release** → loss of LMN inhibition → **spasticity / rigid paralysis**

#### CNS — modulatory transmitters

🔴 **Dopamine**
- **Roles**: motor control (basal ganglia), reward, CRTZ (vomiting trigger), prolactin inhibition
- **Basal ganglia explained**: deep brain clusters that act as a **"smooth movement filter"** — the motor cortex generates the *intent* to move, and the basal ganglia decide which movements get through and which get suppressed. They balance a **"go" pathway** and a **"stop" pathway**, and **dopamine (from the substantia nigra) is the tuning knob**: it **activates "go" and inhibits "stop,"** so the net effect is **facilitation of smooth voluntary movement**.
- ⚡ **Drugs acting on dopamine**:

| Drug | Action on dopamine | Key uses |
|---|---|---|
| **Acepromazine** | D2 antagonist (blocks) — **crosses BBB** | Sedation, antiemetic |
| **Metoclopramide** | D2 antagonist (blocks) — **partially crosses BBB** | Prokinetic, antiemetic |
| **Domperidone** | D2 antagonist (blocks) — **does NOT cross BBB** | Prokinetic, antiemetic, lactation induction |
| **Pergolide** | D2 **agonist** (activates) — crosses BBB | Equine PPID (Cushing's), Parkinson's in humans |

🔴 **Serotonin (5-HT)**
- **Roles**: mood, sleep, vomiting (5-HT3 receptor), GI motility
- ⚡ **Drug hooks**: **ondansetron** blocks 5-HT3 → antiemetic; **fluoxetine** = SSRI (behavior)
- ⚠️ **Warning**: SSRI + tramadol / MAOI / amitraz → **serotonin syndrome**

🟡 **Histamine**
- **Roles**: wakefulness, allergy, gastric acid secretion
- **Receptors**:
  - **H1** — allergy (blocked by diphenhydramine)
  - **H2** — gastric acid (blocked by famotidine)

### Autonomic Nervous System 🔴
| | Sympathetic | Parasympathetic |
|---|---|---|
| Origin | Thoracolumbar (T1–L4/5) | Craniosacral (CN III, VII, IX, X + S1–S3) |
| Pre-ganglionic NT | ACh (nicotinic) | ACh (nicotinic) |
| Post-ganglionic NT | **Norepinephrine** (mostly) — exception: sweat glands ACh | ACh (muscarinic) |
| **Pupil** | Mydriasis (α1) | Miosis (M3) |
| **Heart** | ↑ rate (β1), ↑ contractility | ↓ rate (M2) |
| **Bronchi** | Dilate (β2) | Constrict (M3) |
| **GI** | ↓ motility | ↑ motility, ↑ secretion |
| **Bladder** | Detrusor relax (β3); sphincter contract (α1) | Detrusor contract (M3); sphincter relax |
| **Vessels** | Vasoconstrict (α1) — most; vasodilate skeletal muscle (β2) | Minimal direct innervation |
| **Sweat (where present)** | Sympathetic, but ACh — exception | — |

🔴 ⚡ **Mnemonic**: "Fight or Flight" (sympathetic) vs "Rest and Digest" (parasympathetic)

### UMN vs LMN Signs 🔴

![UMN vs LMN anatomy diagram — UMN cell body sits in the motor cortex of the brain; its axon (UMN) stays inside the CNS, traveling down the spinal cord and synapsing on the LMN cell body in the ventral horn; the LMN then exits the CNS and runs to the muscle](images/physiology/umn-lmn-anatomy.png)

#### The two-neuron motor chain

Voluntary movement requires **two neurons in series**:
- **UMN (upper motor neuron)** — cell body in the brain (motor cortex/brainstem), axon stays entirely **inside the CNS**, synapses on the LMN in the ventral horn of the spinal cord.
- **LMN (lower motor neuron)** — cell body in the ventral horn of the cord (or in cranial nerve nuclei), axon **exits the CNS** through the ventral root, runs through the peripheral nerve, and synapses on the muscle at the NMJ.

#### What each neuron actually does

🔴 **The LMN does two jobs at once**:
1. **Transmits voluntary commands** from the brain (via the UMN) → muscle.
2. **Maintains baseline trophic support + muscle tone** — even at rest, the LMN sends constant low-level firing to the muscle. This keeps it alive, healthy, and slightly toned, and modulates the spinal reflex arcs.

🔴 **The UMN's main job (besides relaying voluntary commands)**: **inhibit and modulate the LMN** — keeping reflexes in check and preventing them from firing too easily.

This is the key insight: **the UMN is largely a brake on the LMN**, not just a wire that carries commands. Damage one or the other and you lose different things.

#### UMN lesion — "brain can't reach the limb, but the limb's local circuitry is intact"

The LMN is still alive and still firing. What's missing is the **descending inhibition** the UMN normally provided. So:
- 🔴 **Voluntary movement lost or weak** (paresis/paralysis) — command from brain can't get through.
- 🔴 **Muscle tone increased (spastic)** — LMN without its UMN brake fires too easily. Stretch the muscle and it resists strongly.
- 🔴 **Reflexes hyperactive** — reflex arcs intact, no inhibition → overshoot. Tap the tendon, get a big jerk.
- 🔴 **No fasciculations** — LMN is healthy and firing in coordinated bursts.
- 🔴 **Atrophy late and mild** — disuse only, because the LMN still provides trophic support.

🟡 *Mental image*: the muscle's "control board" (LMN) is still plugged in, but no one's at the controls upstairs. The board fires too easily on its own.

#### LMN lesion — "muscle has lost its only connection to the nervous system"

More devastating, because the LMN is the muscle's **sole link** to the rest of the body. Cut it and:
- 🔴 **Flaccid paralysis** — no command can reach the muscle.
- 🔴 **Tone decreased or absent** — muscle has lost the baseline tonic firing that maintained tone. Feels limp.
- 🔴 **Reflexes reduced or absent** — the reflex arc itself is broken. Even if you tap the tendon, there's no LMN to complete the loop.
- 🔴 **Fasciculations appear** — denervated fibers become hypersensitive and twitch spontaneously; dying LMN axons also fire erratically before degenerating.
- 🔴 **Rapid neurogenic atrophy (within ~7–10 days)** — no trophic support → muscle wastes almost immediately. Dramatic and easy to see on physical exam.

🟡 *Mental image*: muscle is completely disconnected from the nervous system. No commands, no tone, no reflexes, no trophic support — on its own and wasting fast.

#### The localization rule 🔴

The signs tell you **where the lesion is relative to the limb's spinal segment**:
- 🔴 **UMN signs in a limb** → lesion is **above** that limb's spinal segment (anywhere from cortex down to just above that segment).
- 🔴 **LMN signs in a limb** → lesion is **at** that spinal segment, in the ventral root, peripheral nerve, NMJ, or muscle itself.

#### Quick comparison table

| Feature | UMN lesion | LMN lesion |
|---|---|---|
| Voluntary movement | Lost/weak (paresis-paralysis) | Lost (flaccid paralysis) |
| Tone | ↑ (spastic) | ↓ (flaccid) |
| Reflexes | Hyperreflexic | Hyporeflexic/areflexic |
| Fasciculations | Absent | **Present** |
| Atrophy | Late, mild (disuse) | **Rapid (7–10 days), severe (neurogenic)** |
| Lesion location | Above the limb's segment | At the segment, root, nerve, NMJ, or muscle |

### Neurolocalization Regions 🔴 (single highest-yield neurology concept)
| Region | Forelimbs | Hindlimbs | Classic cause |
|---|---|---|---|
| 🔴 **Intracranial** | Normal or contralateral UMN | Normal or contralateral UMN | + cranial nerve signs, mentation, seizures, head tilt |
| 🔴 **C1–C5** | UMN | UMN | Cervical IVDD, Wobbler, AAS |
| 🔴 **C6–T2** (cervical intumescence) | **LMN** | UMN | FCE, cervical IVDD |
| 🔴 **T3–L3** | Normal | UMN — **classic IVDD presentation** | ⚡ **Hansen Type I IVDD (Dachshund)** |
| 🔴 **L4–S3** (lumbar intumescence) | Normal | **LMN** | Cauda equina, FCE, lumbosacral disease |

🔴 ⚡ **Schiff-Sherrington posture**: acute T3–L3 lesion → **forelimb extensor rigidity + flaccid hindlimbs** (release of "border cells" in lumbar cord that normally inhibit forelimb extensors); UMN-style despite forelimb extension; not poor prognosis itself

> *Border cell mechanism (background context): In the cranial lumbar spinal cord (L1–L5) there's a special population of interneurons called "border cells" (a.k.a. Cooper-Sherrington cells). They sit in the dorsolateral border of the ventral gray column of the lumbar segments, send axons cranially through the fasciculus proprius, and synapse on thoracic limb LMNs in the cervical intumescence. Their effect is inhibitory — they tone down forelimb extensor activity. Why would the lumbar cord need to inhibit forelimb extensors? Gait coordination — the lumbar segments driving the hindlimbs need to dampen the forelimbs in a phase-appropriate way during locomotion. Acutely sever the connection (T3–L3 lesion) and that tonic inhibition disappears → forelimb extensors fire unopposed → the classic rigid-forelimb, flaccid-hindlimb posture.*

### Pain Pathways 🟡
- Nociceptors → afferent fibers:
  - **A-δ fibers** (myelinated, fast) — sharp, well-localized pain
  - **C fibers** (unmyelinated, slow) — dull, burning, poorly localized
- Synapse in **dorsal horn** (substance P, glutamate as neurotransmitters)
- **Spinothalamic tract** → thalamus → cortex
- 🟡 **Central sensitization (windup)**: chronic pain → NMDA receptor upregulation → exaggerated response; targets: **gabapentin, ketamine (NMDA antagonist), amantadine**
- 🟡 **Multimodal analgesia** = combine drugs at different sites: opioid + NSAID + local block + α2-agonist + NMDA antagonist (e.g., MLK CRI = morphine + lidocaine + ketamine)

---

## 7. Muscle Physiology

### Cross-Bridge Cycle 🔴

🎥 [Watch: Cross-bridge cycle explained (YouTube)](https://www.youtube.com/watch?v=BVcgO4p88AA&t=60s)

1. Action potential → T-tubule depolarization → sarcoplasmic reticulum releases **Ca²⁺**
2. **Ca²⁺ binds troponin C** → conformational shift in tropomyosin → exposes actin binding sites
3. **Myosin head** (already loaded with ADP + Pi from previous ATP hydrolysis) binds actin
4. **Power stroke**: myosin head pivots, releases ADP + Pi, pulls actin toward sarcomere center
5. **ATP binds myosin** → detachment from actin
6. ATP → ADP + Pi by myosin ATPase → cocked head ready for next cycle
- **Rigor mortis** = no ATP available after death → myosin remains bound to actin

### Fiber Types 🟡
| Type | Contraction speed | Metabolism | Color | Fatigue | Examples |
|---|---|---|---|---|---|
| **Type I** | Slow | Oxidative | Red (high myoglobin) | Resistant | Postural muscles, soleus |
| **Type IIa** | Fast | Oxidative-glycolytic | Pink | Moderate | Endurance + sprint |
| **Type IIb/IIx** | Fast | Glycolytic | White (low myoglobin) | Quick fatigue | Sprinting, jumping |

🟢 Quarter Horses bred for high Type II proportion → power but predisposed to **PSSM**

### Neuromuscular Junction (NMJ) 🔴
- Motor neuron AP → presynaptic terminal Ca²⁺ influx → ACh vesicles fuse → ACh released into synaptic cleft → binds **nicotinic AChR on motor end-plate** → end-plate potential → muscle AP propagates → contraction
- ACh broken down by **acetylcholinesterase (AChE)** in cleft

### NMJ Drug & Toxin Targets 🔴
| Agent | Mechanism | Effect |
|---|---|---|
| 🔴 ⚡ **Myasthenia gravis** (acquired, dog) | Autoantibodies vs **nicotinic AChR** (at the motor end-plate) | Exercise-induced weakness, megaesophagus; dx **nicotinic AChR antibody titer**; tx pyridostigmine (AChE inhibitor) |
| 🔴 ⚡ **Botulism** | Cl. botulinum toxin → blocks **ACh RELEASE** | **Flaccid paralysis** (descending — CN first); **shaker foal syndrome**; recovery weeks |
| 🔴 ⚡ **Tetanus** | Cl. tetani toxin → blocks **glycine release** in spinal cord | **Spastic** paralysis, "**sawhorse**" stance, lockjaw, third-eyelid prolapse, reactive to stimuli |
| 🔴 ⚡ **Organophosphates / carbamates** | Inhibit **AChE** → ACh accumulates | **SLUDGE** (Salivation, Lacrimation, Urination, Defecation, GI, Emesis) + nicotinic signs (muscle fasciculations); tx **atropine + 2-PAM (organophosphates only)** |
| **Succinylcholine** | Depolarizing NMJ blocker | Initial fasciculation → flaccid paralysis; rarely used in vet; **risk MH** in pigs |
| **Atracurium, vecuronium, rocuronium** | Non-depolarizing competitive AChR antagonists | Flaccid paralysis; reverse with **neostigmine** (AChE inhibitor) + atropine (block muscarinic SE) |

---

## 8. Reproductive Physiology

### Estrous Cycles by Species 🔴 (memorize this table — high-yield)
| Species | Cycle type | Cycle length | Estrus duration | Key features |
|---|---|---|---|---|
| 🔴 **Dog (bitch)** | **Monoestrous** (non-seasonal) | ~6 months | 5–9 d | **Long diestrus = pseudopregnancy** even if unbred (CL persists ~2 mo); proestrus serosanguinous discharge |
| 🔴 **Cat (queen)** | **Induced ovulator**, seasonally polyestrous | 14–21 d return if not bred | 3–7 d | **Long-day breeder** (Feb-Sept N hemisphere); coital stimulus → LH surge → ovulation |
| 🔴 **Cow** | Spontaneous polyestrous (year-round) | **21 d** | ~18 h (short!) | Ovulation **~12 h post-estrus end**; CL on ovary maintains pregnancy; estrus in late afternoon/early morning |
| 🔴 **Mare** | Seasonally polyestrous | 21 d | 5–7 d (long!) | **Long-day breeder** (peak May–Aug N hemisphere); ovulation 24–48 h before estrus end; transition period in spring |
| 🔴 **Ewe** | Seasonally polyestrous | 16–17 d | 24–36 h | **Short-day breeder** (fall) |
| 🔴 **Doe (goat)** | Seasonally polyestrous | 21 d | 24–36 h | Short-day breeder |
| 🔴 **Sow** | Spontaneous polyestrous | **21 d** | 1–3 d | Returns to estrus 3–7 d post-weaning |

### Cycle Phases (Bitch Example) 🔴
- 🔴 **Proestrus** (~9 d): vulvar swelling, **serosanguinous discharge**, estrogen rising, attractive but not receptive; vaginal cytology: parabasal/intermediate → superficial cells increasing
- 🔴 **Estrus** (~9 d): **receptive**, ovulation occurs ~2 d after LH peak, **vaginal cytology >90% cornified superficial cells**; **serum progesterone rises** (5 ng/mL at LH surge, 5-10 at ovulation, >5 ng for 60 d in pregnancy)
- 🔴 **Diestrus** (~60 d): CL function regardless of pregnancy → **pseudopregnancy** common in unbred dogs; vaginal cytology returns to parabasal/intermediate + neutrophils
- **Anestrus** (~3-5 mo): quiescent

### Pregnancy Recognition by Species 🔴
| Species | Mechanism | Day of recognition |
|---|---|---|
| 🔴 **Cow, ewe** | **Trophoblastic interferon-tau (IFN-τ)** prevents endometrial PGF2α → maintains CL | ~Day 16 (cow), Day 13 (ewe) |
| 🔴 **Mare** | **Embryo migrates throughout uterus** then fixates in uterine horn ~day 16 (movement signals embryo presence) | Day 14-16 |
| 🔴 **Sow** | **Estrogen from blastocysts** rescues CL ("luteostatic" — opposite of cattle) | Days 11-12 |
| 🔴 **Bitch** | **Relaxin from placenta** detectable | ~Day 25-30 |
| 🟡 **Cat** | LH surge from coitus maintains CL initially; then placental support | Mid-gestation |

### Gestation Lengths 🔴 (memorize)
| Species | Length |
|---|---|
| **Dog** | ~63 d (from LH peak; 58-72 from breeding) |
| **Cat** | ~63 d |
| **Cow** | ~283 d (~9.5 mo) |
| **Mare** | ~340 d (~11 mo) |
| **Ewe** | ~150 d (~5 mo) |
| **Doe** | ~150 d |
| **Sow** | **3-3-3** (3 mo, 3 wk, 3 d) = ~114 d |
| **Llama/Alpaca** | ~345 d |

### Parturition 🔴
- 🔴 ⚡ **Triggered by FETAL CORTISOL** (rises near term) → placenta → ↑ estrogen, ↓ progesterone → **PGF2α release → luteolysis + uterine contractions** → relaxin (cervix softening) → oxytocin (contractions, ferguson reflex)
- 🟡 Why this matters: ⚡ **fescue toxicosis (mares)** disrupts hormonal cascade → prolonged gestation, no mammary development, dystocia, retained placenta, agalactia

**Stages of labor:**
1. **Stage I**: cervical dilation, restlessness, mild contractions; hours
2. **Stage II**: active straining, fetal expulsion through birth canal
3. **Stage III**: placental expulsion
   - 🔴 ⚡ **>3 h in mare = retained placenta = EMERGENCY** (laminitis, metritis, septicemia risk)
   - >12 h in cow = retained fetal membranes (RFM) — common, manage with antibiotics if febrile

### Lactation 🟡
- **Prolactin** (anterior pituitary) → milk synthesis (lactogenesis)
- **Oxytocin** (posterior pituitary, neuroendocrine) → **milk letdown reflex** (suckling stimulus → oxytocin release within seconds → myoepithelial contraction → milk ejection)
- 🟡 Stress (epinephrine) → vasoconstriction in mammary → **inhibits oxytocin letdown** ("nervous" mare)
- 🟡 **Mammary involution (drying off)** in dairy: stop milking → ↑ pressure → ↓ secretion; intramammary dry cow therapy (antibiotic + teat sealant) protects against new infections

---

## 9. Acid-Base Balance

### Henderson-Hasselbalch 🔴
**pH = 6.1 + log([HCO₃⁻] / (0.03 × PaCO₂))**

- Normal arterial pH: 7.35–7.45
- Normal PaCO₂: 35–45 mmHg
- Normal HCO₃⁻: 22–28 mEq/L

### The Bicarbonate Buffer System 🔴

🔴 **The master equation**:

**CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻**

What it means:
- **CO₂ behaves like an acid** in solution (it produces H⁺).
- **HCO₃⁻ (bicarbonate) behaves like a base** (it consumes H⁺).
- **pH depends on the *ratio* between them, not their absolute amounts.**

🔴 **The clinically useful version (Henderson-Hasselbalch)**:
- **More HCO₃⁻ or less CO₂** → ↑ pH (**alkalosis**)
- **Less HCO₃⁻ or more CO₂** → ↓ pH (**acidosis**)

🔴 **The two control systems** — the body has **two independent organs** that adjust these two variables:

| Organ | Variable controlled | Speed | Mechanism |
|---|---|---|---|
| 🫁 **Lungs** | **PaCO₂** | **Fast (minutes)** | Breathe **faster** → blow off CO₂ → PaCO₂ ↓. Breathe **slower** → retain CO₂ → PaCO₂ ↑. |
| 🫘 **Kidneys** | **HCO₃⁻** | **Slow (hours–days)** | Retain HCO₃⁻ / excrete H⁺ → HCO₃⁻ ↑. Excrete HCO₃⁻ / retain H⁺ → HCO₃⁻ ↓. |

🟡 *Key conceptual point*: this is why **respiratory compensation** for a metabolic problem starts within minutes, but **renal compensation** for a respiratory problem takes 24–48 hours to fully kick in — different organs, different timescales.

### Primary Disturbances 🔴

🔴 **The trick is identifying the primary problem** (where the disturbance started) **versus the compensation** (the body trying to fix the ratio).

- 🔴 **Metabolic acidosis**: loss of bicarbonate → pH falls → lungs compensate with **hyperventilation** → carbon dioxide falls → pH stabilizes.
  - **Common causes**: see **MUDPILES** (high AG) and **HARDUPS** (normal AG) below.
- 🔴 **Metabolic alkalosis**: bicarbonate rises → pH rises → lungs compensate with **hypoventilation** → carbon dioxide rises → pH stabilizes.
  - **Common causes**: **vomiting** (loss of HCl from stomach → loss of acid → relative gain of HCO₃⁻ — classic in ⚡ **GDV**, **pyloric obstruction**, persistent emesis), **diuretic use** (loop/thiazide), **hyperaldosteronism**.
- 🔴 **Respiratory acidosis**: carbon dioxide rises → pH falls → **kidneys retain bicarbonate** (slow) → pH stabilizes.
  - **Common causes**: anything that **impairs ventilation** — airway obstruction, severe pneumonia, pulmonary edema, **anesthetic respiratory depression**, **opioid overdose**, neuromuscular disease affecting respiratory muscles (**botulism**, **tick paralysis**, severe myasthenia), chest wall trauma (flail chest), pneumothorax.
- 🔴 **Respiratory alkalosis**: carbon dioxide falls → pH rises → **kidneys excrete bicarbonate** (slow) → pH stabilizes.
  - **Common causes**: **pain, anxiety, fever**, **sepsis (early)**, **pulmonary embolism**, **high altitude**, **salicylate toxicity (early)** — directly stimulates the respiratory center, **liver failure**, **mechanical overventilation** in anesthetized patients.

🔴 **Compensation rules of thumb**:
- Respiratory compensation for metabolic = MINUTES
- Renal compensation for respiratory = 24-48 H (fully)
- Compensation **never completely corrects the pH** — it just brings it closer to normal; pH stays slightly to the side of the primary disturbance

### Anion Gap 🔴
**AG = Na⁺ − (Cl⁻ + HCO₃⁻)** (sometimes including K⁺)
Normal: 12–24 mEq/L (species-dependent; lower in cats ~13–27)

🔴 **Why it matters in metabolic acidosis**:

Metabolic acidosis means **bicarbonate has dropped**. There are only **two ways** for bicarbonate to drop:

- 🔴 **Path 1 — You added acid**: the acid's H⁺ consumed bicarbonate, but the acid's **anion sticks around as an unmeasured anion**. Bicarbonate ↓, unmeasured anions ↑ → **anion gap rises** (= high AG / MUDPILES).
- 🔴 **Path 2 — You lost bicarbonate directly (or added HCl)**: the body retains **chloride** to maintain electroneutrality. Bicarbonate ↓, chloride ↑ → **anion gap stays the same** (= normal AG / hyperchloremic / HARDUPS).

🔴 ⚡ **High AG metabolic acidosis (MUDPILES)**:
- **M**ethanol (rare in vet)
- **U**remia (CKD)
- **D**KA (diabetic ketoacidosis — β-hydroxybutyrate, acetoacetate)
- **P**ropylene glycol (excess as diluent)
- **I**ron / Isoniazid
- **L**actic acidosis (sepsis, GDV, hypoperfusion, exercise — most common)
- **E**thylene glycol → glycolate, oxalate (anti-freeze toxicosis)
- **S**alicylates

🔴 ⚡ **Normal AG (hyperchloremic) metabolic acidosis (HARDUPS)**:
- **H**yperalimentation
- **A**ddison's
- **R**enal tubular acidosis
- **D**iarrhea (HCO₃⁻ loss)
- **U**reteroenteric fistula
- **P**ancreatic fistula (HCO₃⁻ loss)
- **S**aline (NS infusion → hyperchloremic acidosis)

---

## Key Takeaway Priorities

1. 🔴 **ECG buzzwords** (hyperK tented T, P mitrale, electrical alternans, VPCs) — every NAVLE
2. 🔴 **Oxyhemoglobin curve shifts** (Bohr; CO/fetal Hb left)
3. 🔴 **RAAS pathway + drug targets** (ACEi, spironolactone, ARBs)
4. 🔴 **Nephron segments + diuretic targets** (furosemide → loop, thiazides → DCT, spironolactone → CD)
5. 🔴 **Calcium regulation** (PTH/vitamin D/calcitonin) and **hyperCa differentials (lymphoma, anal sac AC)**
6. 🔴 **Estrous cycles by species** + pregnancy recognition mechanisms
7. 🔴 **VFAs in ruminants** — propionate is the glucose precursor
8. 🔴 **NMJ targets** — myasthenia, botulism (flaccid), tetanus (spastic), OPs (SLUDGE)
9. 🔴 **Neurolocalization** — UMN vs LMN by region
10. 🔴 **Acid-base interpretation** + MUDPILES / HARDUPS
