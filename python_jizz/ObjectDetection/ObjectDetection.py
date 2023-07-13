from imageai.Detection import ObjectDetection
import os

# change dir to resource folder in ObjectDetection folder
os.chdir(r"C:\Users\user\Desktop\New folder\code\python jizz\ObjectDetection\resources")
execution_path = os.getcwd()
print(execution_path)
detector = ObjectDetection()
detector.setModelTypeAsRetinaNet()
detector.setModelPath(os.path.join(execution_path , "resnet50_coco_best_v2.0.1.h5"))
detector.loadModel()
detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path , "image.jpg"), output_image_path=os.path.join(execution_path , "imagenew.jpg"))
for eachObject in detections:
    print(eachObject["name"] + " : " + eachObject["percentage_probability"] )
