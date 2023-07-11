(define (domain matrix)
    (:requirements :typing :negative-preconditions :strips :conditional-effects)
    (:types
        value position
    )
    (:predicates
        (top_most ?y - position)
        (left_most ?x - position)
        (right_most ?x - position)
        (bottom_most ?y - position)

        (nearby_left ?l1 ?l2 - position)
        (nearby_right ?l1 ?l2 - position)
        (nearby_up ?l1 ?l2 - position)
        (nearby_down ?l1 ?l2 - position)
        
        (at ?n - value ?x ?y - position)
        (blank ?x ?y - position)
    )
    (:action move_left
        :parameters (?num - value ?xf ?yf ?xt - position)
        :precondition (and
            (nearby_right ?xf ?xt)
            (not(left_most ?xf))
            (blank ?xt ?yf)
            (at ?num ?xf ?yf)
        )
        :effect (and
            (not(at ?num ?xf ?yf))
            (blank ?xf ?yf) 
            (at ?num ?xt ?yf)
            (not(blank ?xt ?yf))
        )
    )
    (:action move_right
        :parameters (?num - value ?xf ?yf ?xt - position)
        :precondition (and
            (nearby_left ?xf ?xt)
            (not(right_most ?xf))
            (blank ?xt ?yf)
            (at ?num ?xf ?yf)
        )
        :effect (and
            (not(at ?num ?xf ?yf))
            (blank ?xf ?yf)
            (at ?num ?xt ?yf)
            (not(blank ?xt ?yf))
        )
    )
    (:action move_up
        :parameters (?num - value ?xf ?yf ?yt - position)
        :precondition (and
            (nearby_down ?yf ?yt)
            (not(top_most ?yf))
            (blank ?xf ?yt)
            (at ?num ?xf ?yf)
        )
        :effect (and
            (not(at ?num ?xf ?yf))
            (blank ?xf ?yf)
            (at ?num ?xf ?yt)
            (not(blank ?xf ?yt)) 
        )
    )
    (:action move_down
        :parameters (?num - value ?xf ?yf ?yt - position)
        :precondition (and
            (nearby_up ?yf ?yt)
            (not(bottom_most ?yf))
            (blank ?xf ?yt)
            (at ?num ?xf ?yf)
        )
        :effect (and
            (not(at ?num ?xf ?yf))
            (blank ?xf ?yf)       
            (at ?num ?xf ?yt)
            (not(blank ?xf ?yt))     
        )
    )
)