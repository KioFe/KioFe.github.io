import numpy as np
import cv2
import copy
from make_video import make_video
from progress.bar import Bar


def main():
    capture = cv2.VideoCapture('videoplayback.mp4')
    background_subtractor = cv2.createBackgroundSubtractorMOG2()
    length = int(capture.get(cv2.CAP_PROP_FRAME_COUNT))
    bar = Bar('Processing Frames', max=length)

    first_iteration_indicator = 1
    for i in range(0, length):

        ret, frame = capture.read()

        if first_iteration_indicator == 1:

            first_frame = copy.deepcopy(frame)
            height, width = frame.shape[:2]
            accum_image = np.zeros((height, width), np.uint8)
            first_iteration_indicator = 0
            

        else:

            filters = background_subtractor.apply(frame)
            
            cv2.imwrite('./diff-bkgnd-frame.jpg', filters)

            nameo = "./mas/frame%d.jpg" % i
            cv2.imwrite(nameo, filters)
            threshold = 2
            maxValue = 2
            ret, th1 = cv2.threshold(filters, threshold, maxValue, cv2.THRESH_BINARY)
            nameos = "./th1/frame%d.jpg" % i
            cv2.imwrite(nameos, th1)
            # add to the accumulated image
            accum_image = cv2.add(accum_image, th1)
            cv2.imwrite('./mask.jpg', accum_image)
           
            color_image_video = cv2.applyColorMap(accum_image, cv2.COLORMAP_HOT)
            nameos = "./accum_image/frame%d.jpg" % i
            cv2.imwrite(nameos, color_image_video)
            video_frame = cv2.addWeighted(frame, 0.7, color_image_video, 0.7, 0)

            name = "./frames/frame%d.jpg" % i
            cv2.imwrite(name, video_frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        bar.next()

    bar.finish()

    make_video('./frames/', './output.avi')

    color_image = cv2.applyColorMap(accum_image, cv2.COLORMAP_HOT)
    cv2.imwrite('ac.jpg', accum_image)
    cv2.imwrite('acs.jpg', color_image)
    result = cv2.addWeighted(first_frame, 0.7, color_image, 0.7, 0)

    # save the final heatmap
    cv2.imwrite('final_result.jpg', result)

    # cleanup
    capture.release()
    cv2.destroyAllWindows()


if __name__ == '__main__':
    main()
