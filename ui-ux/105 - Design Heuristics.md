Guidelines.usability.gov
material design
https://developer.android.com/design

Heuristic just means rule of thumb.

#1 - Visibility of System Status
the system should always keep users informed about what is going on with the system through appropriate feedback within a reasonable amount of time.

why
knowing what actions are available bridges the gulf of execution
Knowing how system responded bridges gulf of evaluation
Echoes norman principles of feedback and constraints

ways to provide
feedback ()
available actions (disabling incative operations)
general avialability (sand clock cursor)

How usersd react to delay:
<100 milliseconds  instantenious
<1 sec noticeable, but tolerable
<10 sec aannoying, but willing to wait
10+seconds focus is lost

Design suggestions
strive for <1000 msec responce time
up to 1 second on indicator is needed
from 1 to 10 seconds use wait cursor
over 10 seconds complete in background, use progress bars and estimates

# 2 - Match Between System and Real World
the system should speak the user's language with words, phrases, and concepts familiar to the user rather than using system oriented terms. 

why?
allows us to take advantage of users existing schema or the associations
It also allows us to leverage perceived affordances and signifiers that suggest actions that are familiar to the users,
reduces the difficulty of forming effective conceptual models because we're taking advantage of conceptual models that users already have

examples
using real familiar words violation: programming term is error messages


It's important to make sure that systems that we design match the real-world expectations of users, so that they can take advantage of what they know from the real world and use it to effectively use the systems that we design.


example: when seeing a shopping cart user can guess that it allows similar set of actions that its real world prototype (adding, deleting, editing, abandoning cart)

# 3 - User Control and Freedom
So, users often choose system functions by mistake and need to be able to get out of the state that they've gotten themselves into. Through a clearly marked emergency exit or something similar.

Why?
mistakes are inevidable
suppports 7 stages of action by allowing reformulated goals
Users employ triall and error to learn a new system

# 4 - Consistency and Standards
Users should not have to wonder whether different words, situations, or actions mean the same thing

why 
leverage users schemas
Present a coherent conceptual models

Example
Consistency of (system) language is an example. Also can be applied in layout and behaviour

advantage is that it allows borrowing ideas in layout for example which will simplify users switching to your product

#5 - Error Prevention
even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action

Hwy?
Mistakes are common
People dont see or read anything on the screen
People make mistakes everytime they type, click, etc.


example
birthday input waiting date in specific format
worst no expected formatting message
hint about expected format
splin input for each data

design hints
provide constraints
confirm risky actions or the one that cant be undone
prevent actions that are likely to fail

#6 - Recognition Over Recall
minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. And instructions for use of the system should be visible or easily retrievable whenever appropriate.

why
 familiar stimulus triggers retrieval from long-term memory
 recall force users to
   recreate chain of associations themselves or
   forcefully learn throught elaborative rehearsal
 recall will fail unless remembered actions are
  frequent
  recent
  strongly associated

# 7 - Flexibility and Efficiency of Use
accelerators -   unseen by the novice user may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users, allow users to tailor frequent actions wherever possible

why
Recall is bad for new/inefficient user, but can be fast for experts
Different users have different goals, allow the to customize (! dont force them to!)

copy paste 
	recognition use item from menu
	recall use the shortcut

Design hints 
	Shortcuts and bookmarks


# 8 - Aesthetic and Minimalist Design
 And he says dialogue should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue or on a screen competes with the relevant units of information and diminishes their relative visibility.

Why
Visual clutter makes it harder to find and focus on desired actions
Good use of color, shape, motions, and gestalt principles guide the eye
The more is to see, the lee of it users will actually see

> People don't read everything that on the screen

Design hints
use gestalt principles to support non-linear reading (allow users thi skipp info they dont want to get exactlly to that what they want)

#9 - Error Recovery
Our ninth heuristic is help users recognize, diagnose, and recover from errors.
Error messages should be expressed in plain language, no codes, no programmer's speak, precisely indicate the problem and constructively suggest a solution.

So an important part of this heuristic is make sure that any error messages that you display to the user make sense to them

# 10 - Help and Documentation
Even though it's better if the system can be used without any documentation, it sometimes may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.

Why?
UI might be not as self-explanatory as you expected it to be

Structure to support gulf of execution:
	easy to search
	Contain list of actions
	Focused on users tasks

Hints
best if help is not needed
If required make suree that help is:
	searchabke
	task-focused
	concrete