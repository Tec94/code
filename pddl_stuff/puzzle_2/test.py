from pddl.logic import Predicate, constants, variables
from pddl.core import Domain, Problem, Action, Requirements
from pddl.formatter import domain_to_string, problem_to_string
from pddl import parse_domain, parse_problem


# define the variables
x, y, l1, l2, xf, yf, xt, yt = variables("x y l1 l2 xf yf xt yt", types=["position"])
n, num = variables("n num", types=["value"])

# Define the predicates
top_most = Predicate("top_most", y)
left_most = Predicate("left_most", x)
right_most = Predicate("right_most", x)
bottom_most = Predicate("bottom_most", y)

nearby_left = Predicate("nearby_left", l1, l2)
nearby_right = Predicate("nearby_right", l1, l2)
nearby_up = Predicate("nearby_up", l1, l2)
nearby_down = Predicate("nearby_down", l1, l2)

numbr_at_pos = Predicate("numbr_at_pos", n, x, y)
empty_at_pos = Predicate("empty_at_pos", x, y)

# Define the actions
move_left = Action(
    name="move_left",
    parameters=(num, xf, yf, xt),
    precondition=(nearby_right(xf, xt) & ~left_most(xf) & empty_at_pos(xt, yf) & numbr_at_pos(num, xf, yf)),
    effect=(~numbr_at_pos(num, xf, yf) & empty_at_pos(xf, yf) & numbr_at_pos(num, xt, yf) & ~empty_at_pos(xt, yf))
)

move_right = Action(
    name="move_right",
    parameters=(num, xf, yf, xt),
    precondition=(nearby_left(xf, xt) & ~right_most(xf) & empty_at_pos(xt, yf) & numbr_at_pos(num, xf, yf)),
    effect=(~numbr_at_pos(num, xf, yf) & empty_at_pos(xf, yf) & numbr_at_pos(num, xt, yf) & ~empty_at_pos(xt, yf))
)

move_up = Action(
    name="move_up",
    parameters=(num, xf, yf, yt),
    precondition=(nearby_down(yf, yt) & ~top_most(yf) & empty_at_pos(xf, yt) & numbr_at_pos(num, xf, yf)),
    effect=(~numbr_at_pos(num, xf, yf) & empty_at_pos(xf, yf) & numbr_at_pos(num, xf, yt) & ~empty_at_pos(xf, yt))
)

move_down = Action(
    name="move_down",
    parameters=(num, xf, yf, yt),
    precondition=(nearby_up(yf, yt) & ~bottom_most(yf) & empty_at_pos(xf, yt) & numbr_at_pos(num, xf, yf)),
    effect=(~numbr_at_pos(num, xf, yf) & empty_at_pos(xf, yf) & numbr_at_pos(num, xf, yt) & ~empty_at_pos(xf, yt))
)

# Define the domain
requirement = [Requirements.STRIPS, Requirements.TYPING, Requirements.CONDITIONAL_EFFECTS, Requirements.NEG_PRECONDITION]
domain = Domain("matrix",
            requirements=requirement,
            types=["position", "value"],
            predicates=[top_most, left_most, right_most, bottom_most, nearby_left, nearby_right, nearby_up, nearby_down, numbr_at_pos, empty_at_pos],
            actions=[move_left, move_right, move_up, move_down])
problem = Problem('prob2matrix',
                domain=domain,
                requirements=requirement,
                objects=[x, y, l1, l2, xf, yf, xt, yt, n, num],
                init=[top_most(yf), left_most(xf), right_most(xf), bottom_most(yf), nearby_left(xf, xt), nearby_right(xf, xt), nearby_up(yf, yt), nearby_down(yf, yt), numbr_at_pos(n, xf, yf), empty_at_pos(xt, yt)],
                goal=[numbr_at_pos(num, xt, yt), empty_at_pos(xf, yf)])