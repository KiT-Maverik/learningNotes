> Heuristic - rule of thumb.

# 1 - Visibility of System Status
System should always keep users informed about what is going on with the system through appropriate feedback within a reasonable amount of time.

### Why?
* Knowing what actions are available bridges the gulf of execution.
* Knowing how the system responded bridges gulf of evaluation.
* Echoes norman principles of feedback and constraints.

### Ways to provide
* Provide user with feedback.
* Highlight available actions and disable inactive ones.
* Show system availability status (e.g. use sand clock cursor if it is busy).

### How users react to delay:
* <100 milliseconds  instantaneous
* <1 sec noticeable, but tolerable
* <10 sec annoying, but willing to wait
* 10+seconds focus is lost

### Design suggestions
* Strive for <1000 ms response time
* Up to 1 second on indicator is needed
* From 1 to 10 seconds use wait cursor
* Over 10 seconds complete in background, use progress bars and estimates

# 2 - Match Between System and Real World
System should speak the user's language with words, phrases, and concepts familiar to the user rather than using system-oriented terms. 

### Why?
* Allows us to take advantage of users existing schema or the associations
* It also allows us to leverage perceived affordances and signifiers that suggest actions that are familiar to the user.
* Reduces the difficulty of forming effective conceptual models because we're taking advantage of conceptual models that users already have.

> Fail example: using programming terms is error messages.


Also it's important to make sure that systems that we design match the real-world expectations of users so that they can take advantage of what they know from the real world and use it to effectively use the systems that we design.

> Success example: when seeing a shopping cart user can guess that it allows a similar set of actions that its real-world prototype (adding, deleting, editing, abandoning cart)

# 3 - User Control and Freedom
Users often choose system functions by mistake and need to be able to get out of the state that they've gotten themselves into. Through a clearly marked emergency exit or something similar.

### Why?
* Mistakes are inevitable.
* Supports 7 stages of action by allowing reformulated goals.
* Users often learn the system via trial and error.

# 4 - Consistency and Standards
Users should not have to wonder whether different words, situations, or actions mean the same thing.

### Why?
* Leverage users schemas.
* Present a coherent conceptual models.

> Consistency of (system) language is an example. Also can be applied in other areas like layout and behavior. The advantage is that it allows borrowing ideas (e.g. in layout) which will simplify users switching to your product.

#5 - Error Prevention
even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action

### Why?
* Mistakes are common.
* People don't see or read anything on the screen.
* People make mistakes every time they type, click, etc.

### Design hints
* Provide constraints.
* Confirm risky actions or those that can't be undone.
* Prevent actions that are likely to fail.

#6 - Recognition Over Recall
Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. And instructions for use of the system should be visible or easily retrievable whenever appropriate.

### Why?
* Familiar stimulus triggers retrieval from long-term memory.
* Recall force users to:
  * Recreate the chain of associations themselves.
  * Forcefully learn through elaborative rehearsal.
* The recall will fail unless remembered actions are:
  * Frequent
  * Recent
  * Strongly associated

# 7 - Flexibility and Efficiency of Use
Provide users with accelerators.

> **Accelerators** - unseen by the novice user may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users, allow users to tailor frequent actions wherever possible

# Why?
* The recall is bad for new/inefficient user but can be fast for experts
* Different users have different goals, allow them to customize (! don't force them to!)

> Example: for copy/paste operation novice user most likely will use context menu, while experienced one will use a hot key.

### Design hints 
* Use bookmarks, hot keys or other shortcuts.

# 8 - Aesthetic and Minimalist Design
Every extra unit of information in dialogue or on a screen competes with the relevant units of information and diminishes their relative visibility.

### Why?
* Visual clutter makes it harder to find and focus on desired actions.
* Good use of color, shape, motions, and gestalt principles guide the eye.
* The more is to see, the less of it users will actually see.

> People don't read everything that on the screen.

### Design hints
Use gestalt principles to support non-linear reading (allow users skip info they don't want to get exactly to that what they want)

# 9 - Error Recovery
Help users recognize, diagnose, and recover from errors.

### Design hints
* Any error messages that you display to the user must make sense to them.
  * Expressed in plain language
  * No codes
  * No programmer's speak
  * Precisely indicate the problem
  * Constructively suggest a solution

# 10 - Help and Documentation
Even though it's better if the system can be used without any documentation, it sometimes may be necessary to provide help and documentation. Any such information should be:
* focused on user task
* Easy to search
* List concrete steps to be carried out
* Fit in reasonable size

### Why?
* UI might be not as self-explanatory as you expected it to be.

Structure to support the gulf of execution:
	easy to search
	Contain a list of actions
	Focused on users tasks

### Design hints
* Best if help is not needed.
* If required ensure that help is:
  *	Searchable
  *	Task-focused
  *	Concrete
	
# Resources
* [US goverment sites UX guide lines](Guidelines.usability.gov)
* [Material design](https://material.io/design)
* [Design for Android](https://developer.android.com/design)