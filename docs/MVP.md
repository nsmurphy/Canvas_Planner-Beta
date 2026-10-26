## 1. Manually enter an assignment
The user can create, edit, and delete an assignment with:
| Field | Purpose |
|---|---|
| Title | Identify the assignment |
| Course | Organize and filter assignments; optional initially |
| Instructions | Keep the requirements available while planning |
| Due date and time | Establish the deadline |
| Estimated effort | Describe hours of active work, not elapsed calendar time |

## 2. Set study availability
Start with a recurring weekly budget:
Monday: 2 hours
Tuesday: 1 hour
Wednesday: 0 hours
Thursday: 2 hours
Friday: 1 hour
Saturday and Sunday: 0 hours

## 3. Break assignments into milestones
Initially, the user creates the milestones and estimates their effort:
| Milestone | Estimated effort |
|---|---:|
| Research and collect sources | 1.5 hours |
| Create outline | 0.5 hours |
| Write first draft | 3 hours |
| Revise and proofread | 1 hour |

## 4. Generate a schedule
The first scheduling algorithm can be straightforward:
1. Take all unfinished work.
2. Prioritize assignments by deadline.
3. Allocate their milestones in order, starting on the earliest available day.
4. Split large milestones across days when necessary.
5. Respect each day’s available hours.
6. Show any work that cannot fit before its deadline.

## 5. Track progress and save locally
The user should be able to:
- Mark a milestone complete or reopen it.
- Revise the remaining effort for unfinished work.
- Regenerate the remaining schedule after availability or deadlines change.
- Close and reopen the app without losing anything.

## CONCRETE TEST:
Enter three assignments requiring two hours each, all due Friday. Make two hours available on Tuesday, Wednesday, and Thursday. The planner must allocate all six hours before Friday without exceeding daily capacity.

## VARYING TESTS:
Then test the important variations:
- Remove Thursday’s availability: the planner reports two hours that cannot fit.
- Complete one milestone: regeneration does not schedule it again.
- Close and reopen the app: assignments, availability, and progress remain.
- Edit an assignment’s deadline: the app identifies that the plan needs updating.
