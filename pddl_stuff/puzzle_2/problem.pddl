(define (problem probmatrix)
	(:domain matrix)
	(:objects
    	x1 y1 x2 y2 x3 y3 - position
        n1 n2 n3 n4 n5 n6 n7 n8 - value
	)
    (:init
        (top_most y1)
        (bottom_most y3)
        (left_most x1)
        (right_most x3)

        (nearby_left x1 x2) (nearby_right x2 x1)
        (nearby_left x2 x3) (nearby_right x3 x2)

        (nearby_up y1 y2) (nearby_down y2 y1)
        (nearby_up y2 y3) (nearby_down y3 y2)

        ;   [2]   [x]   [3]
        ;   [7]   [4]   [6]
        ;   [1]   [8]   [5]
        (numbr_at_pos n2 x1 y1) (empty_at_pos x2 y1)    (numbr_at_pos n3 x3 y1)
        (numbr_at_pos n7 x1 y2) (numbr_at_pos n4 x2 y2) (numbr_at_pos n6 x3 y2)
        (numbr_at_pos n1 x1 y3) (numbr_at_pos n8 x2 y3) (numbr_at_pos n5 x3 y3)
    )
	(:goal (and
        (numbr_at_pos n1 x1 y1) (numbr_at_pos n2 x2 y1) (numbr_at_pos n3 x3 y1)
        (numbr_at_pos n4 x1 y2) (numbr_at_pos n5 x2 y2) (numbr_at_pos n6 x3 y2)
        (numbr_at_pos n7 x1 y3) (numbr_at_pos n8 x2 y3) 

    ))
)